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
  public categories: Array<string> = [];
  public restaurant: Restaurant = new Restaurant();

  ngOnInit() {
    this.setDisplayData();
  }

  private setDisplayData() {
    return this.restaurantService.getRestaurant().pipe(take(1)).subscribe(
      (restaurant) => {
        console.log('restaurant', restaurant);
        this.restaurant = restaurant;
      },
      (error) => { // todo:
      });
  }
}
