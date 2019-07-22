import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

// Services
import { RestaurantService } from '../serivces/restaurant/restaurant.service';

// Models
import { Restaurant } from '../models/RestaurantModel';

// Third Party
import startCase from 'lodash-es/startCase';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  public restaurant: Restaurant = new Restaurant();
  public startCase = startCase;

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
}
