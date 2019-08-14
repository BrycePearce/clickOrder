import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

// Services
import { UtilityService } from './../../serivces/utilities/utility.service';

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

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>, private utilityService: UtilityService) { }

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

  addSelection() {
    this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }

  updateQuantity(modifier: string) {
    if (modifier === 'increment') {
      if (this.quantity < this.selection.maxSelections) { this.quantity++; }
    } else {
      if (this.quantity > this.selection.minSelections) { this.quantity--; }
    }
  }
}
