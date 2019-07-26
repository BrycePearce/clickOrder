import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

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

  constructor(private restaurantService: RestaurantService, private store: Store<{ checkout: { selections: MenuItem[] } }>) { }

  ngOnInit() {
    this.checkout = this.store.select('checkout');
    this.setDisplayData();
  }

  setDisplayData() {
    this.restaurantService.getRestaurant().pipe(take(1)).subscribe(
      (restaurant) => {
        this.restaurant = restaurant;
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
}
