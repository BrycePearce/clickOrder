import { Restaurant } from 'src/app/models/RestaurantModel';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// NgRx
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public restaurant: Observable<{ restaurant: Restaurant }>;
  public thingy: Restaurant = new Restaurant();

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.getRestaurant();
  }

  getRestaurant() {
    return this.store.select('restaurant').subscribe((asd) => { this.thingy = asd.restaurant; });
  }

}
