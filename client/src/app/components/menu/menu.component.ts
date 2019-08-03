import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// Ngrx
import * as RestaurantActions from '../store/restaurant.action';
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

  constructor(private store: Store<fromApp.AppState>,
    // tslint:disable-next-line: align
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setDisplayData();
  }

  setDisplayData() {
    this.store.select('restaurant')
      .pipe(take(1), map(restaurantState => restaurantState.restaurant)).subscribe((restaurant: Restaurant) => {
        console.log('weee', restaurant);
        this.restaurant = restaurant;
      });
  }

  sortByKey(list: Array<any>, key: string): Array<any> {
    return sortBy(list, o => o[key]);
  }

  loadCustomization(selection: MenuItem) {
    this.router.navigate([`${selection._id}/customization`], {
      relativeTo: this.route,
      state: { selection }
    });
  }
}
