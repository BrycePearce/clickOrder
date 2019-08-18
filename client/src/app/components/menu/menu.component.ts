import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Ngrx
import * as fromApp from '../../store/app.reducer';

// Services
import { UtilityService } from './../../serivces/utilities/utility.service';

// Models
import { Restaurant, Selection } from '../../models/RestaurantModel';

// Third Party
import startCase from 'lodash-es/startCase';
import sortBy from 'lodash-es/sortBy';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public restaurant: Restaurant;
  public checkout: Observable<{ selections: Selection[] }> = this.store.select('checkout');
  public startCase = startCase;
  public sortBy = sortBy;

  constructor(private store: Store<fromApp.AppState>,
    // tslint:disable-next-line: align
    private router: Router, private route: ActivatedRoute, private utilityService: UtilityService) { }

  ngOnInit() {
    this.setDisplayData();
  }

  // todo: use async pipe
  setDisplayData() {
    this.store.select('restaurant')
      .pipe(map(restaurantState => restaurantState.restaurant), take(1)).subscribe((restaurant: Restaurant) => {
        this.restaurant = restaurant;
      });
  }

  sortByKey(list: Array<any>, key: string): Array<any> {
    return sortBy(list, o => o[key]);
  }

  loadCustomization(category: string, id: string) {
    this.router.navigate([`${category}/${id}`], {
      relativeTo: this.route
    });
  }
}
