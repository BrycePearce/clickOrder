import { Restaurant } from 'src/app/models/RestaurantModel';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// NgRx
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public restaurant: Restaurant;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.setDisplayData();
  }

  setDisplayData() {
    this.store.select('restaurant')
      .pipe(map(restaurantState => restaurantState.restaurant)).subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
  }
}
