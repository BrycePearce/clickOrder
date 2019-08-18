import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

// NgRx
import * as MenuActions from '../menu/store/menu.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

// Models
import { ComboSelection, Selection } from './../../models/RestaurantModel';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  public loadCustomization = false;
  public selection: Selection;
  public quantity = 1;
  public selectionForm = this.fb.group({
    sides: ['', Validators.required],
    drinks: ['', Validators.required]
  });

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadSelection();
  }

  loadSelection() {
    // todo: handle invalid cases. Navigate to 'Not Found' component
    const category = this.route.snapshot.url[0].path;
    const selectionId = this.route.snapshot.url[1].path;
    this.store.select('restaurant')
      .pipe(
        map(restaurantState => restaurantState.restaurant.groupedMenu[category]
          .find(selection => selection._id === selectionId)
        )
      ).subscribe(
        (selection: Selection) => {
          if (!selection) {
            console.log('invalid selection, todo: handle');
            return;
          }
          this.selection = selection;
        },
        (err) => {
          console.log('category was invalid, todo: handle', err);
        });
  }

  updateQuantity(modifier: string) {
    if (modifier === 'increment') {
      if (this.quantity < this.selection.maxSelections) { this.quantity++; }
    } else {
      if (this.quantity > this.selection.minSelections) { this.quantity--; }
    }
  }

  addSelection() {
    if (!this.selectionForm.valid) {
      return;
    }
    this.store.dispatch(new MenuActions.AddSelection(this.formSelection()));
    this.router.navigate(['../../'], { relativeTo: this.route });
  }

  private formSelection(): Selection { // todo: there has to be a better way to do this
    const selection = new Selection();
    selection.comboSelections = new ComboSelection();
    selection.comboSelections.sides = [];
    selection.comboSelections.drinks = [];
    selection.name = this.selection.name;
    selection.quantity = this.quantity;
    selection.description = this.selection.description;
    selection.image = this.selection.image;
    selection.price = this.selection.price;
    selection.category = this.selection.category;
    selection.comboSelections.sides.push(
      this.selection.comboSelections.sides.find(side => side._id === this.selectionForm.value.sides)
    );
    selection.comboSelections.drinks.push(
      this.selection.comboSelections.drinks.find(drink => drink._id === this.selectionForm.value.drinks)
    );
    return selection;
  }
}
