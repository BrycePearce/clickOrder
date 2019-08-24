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
    sides: [''],
    drinks: ['']
  });

  constructor(private router: Router, private route: ActivatedRoute, private store: Store<fromApp.AppState>, private fb: FormBuilder) { }

  ngOnInit() {
    this.loadSelection();
    this.setValidators();
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

  setValidators() {
    const sideRequired = this.selection.comboSelections.sideRequired;
    const drinkRequired = this.selection.comboSelections.drinkRequired;
    if (sideRequired && this.selection.comboSelections.sides.length > 0) {
      this.selectionForm.get('sides').setValidators([Validators.required]);
      this.selectionForm.updateValueAndValidity();
    }
    if (drinkRequired && this.selection.comboSelections.drinks.length > 0) {
      this.selectionForm.get('drinks').setValidators([Validators.required]);
      this.selectionForm.updateValueAndValidity();
    }
  }

  calculateTotalCost() {
    const baseCost = Number(this.selection.price);
    const sideCost = Number(this.selectionForm.get('sides').value.additionalCost || 0);
    const drinkCost = Number(this.selectionForm.get('drinks').value.additionalCost || 0);
    return (baseCost + sideCost + drinkCost) * this.quantity;
  }

  updateQuantity(modifier: string) {
    if (modifier === 'increment') {
      if (this.quantity < this.selection.maxSelections) {
        this.quantity++;
      }
    } else {
      if (this.quantity > this.selection.minSelections) {
        this.quantity--;
      }
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
    selection.price = this.calculateTotalCost().toString();
    selection.category = this.selection.category;

    const side = this.selection.comboSelections.sides.find(sideList => sideList._id === this.selectionForm.value.sides._id);
    if (side) {
      selection.comboSelections.sides.push(side);
    }

    const drink = this.selection.comboSelections.drinks.find(drinkList => drinkList._id === this.selectionForm.value.drinks._id);
    if (drink) {
      selection.comboSelections.drinks.push(drink);
    }

    return selection;
  }
}
