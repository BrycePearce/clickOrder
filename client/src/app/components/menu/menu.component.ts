import { MenuActions } from './store/menu.actions';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Ngrx
import * as RestaurantActions from '../store/restaurant.action';
import * as fromCheckout from './store/menu.reducer';
import * as fromApp from '../../store/app.reducer';

// Services
import { RestaurantService } from '../../serivces/restaurant/restaurant.service';

// Models
import { Restaurant, MenuItem } from '../../models/RestaurantModel';

// Third Party
import startCase from 'lodash-es/startCase';
import sortBy from 'lodash-es/sortBy';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public restaurant = new Restaurant();
  public currentSelection = new MenuItem();
  public startCase = startCase;
  public sortBy = sortBy;
  private checkout: Observable<{ selections: MenuItem[] }>;

  constructor(private restaurantService: RestaurantService, private store: Store<fromApp.AppState>,
    // tslint:disable-next-line: align
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.checkout = this.store.select('checkout');
    this.setDisplayData();
  }

  setDisplayData() {
    this.restaurantService.getRestaurant().pipe(take(1)).subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
        console.log(restaurant)
        this.store.dispatch(new RestaurantActions.SetRestaurant(restaurant)); // todo: this may need to be in service? Not here, idk.

      },
      (error) => { // todo:
      });
  }

  // todo: should load selection with a route maybe?
  loadSelection(item: MenuItem) {
    this.currentSelection = item;
    return;
  }

  sortByKey(list: Array<any>, key: string): Array<any> {
    return sortBy(list, o => o[key]);
  }

  clicky() {
    let state;
    this.store.select('checkout').subscribe(s => state = s);
    console.log(state);
  }

  loadCustomization(selection: MenuItem) {
    this.router.navigate([`${selection._id}/customization`], {
      relativeTo: this.route,
      state: { selection }
    });
  }
}
