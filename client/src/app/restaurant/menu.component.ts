import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

// Services
import { RestaurantService } from '../serivces/restaurant/restaurant.service';

// Models
import { Restaurant, MenuItem, Category } from '../models/RestaurantModel';

// Third Party
import startCase from 'lodash-es/startCase';
import sortBy from 'lodash-es/sortBy';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  public restaurant: Restaurant = new Restaurant();
  public startCase = startCase;
  public sortBy = sortBy;

  ngOnInit() {
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

  sortByKey(list: Array<any>, key: string): Array<any> {
    return sortBy(list, o => o[key]);
  }

  loadCustomization(item: MenuItem) {
    console.log(item);
    return;
  }
}
