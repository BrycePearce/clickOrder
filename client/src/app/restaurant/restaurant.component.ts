import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

// Services
import { RestaurantService } from '../serivces/restaurant/restaurant.service';

// Models
import { Restaurant } from '../models/RestaurantModel';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) { }
  public restaurant: Restaurant = new Restaurant();

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
