import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

// NgRx
import * as MenuActions from '../menu/store/menu.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

// Models
import { MenuItem } from '../../models/RestaurantModel';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  public loadCustomization = false;
  public selection: MenuItem;
  public quantity = 1;
  public selectionForm = this.fb.group({
    side: [, Validators.required],
    drink: ['', Validators.required]
  });

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>, private fb: FormBuilder) { }

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
        (selection: MenuItem) => {
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

    // todo:
    // this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }
}
