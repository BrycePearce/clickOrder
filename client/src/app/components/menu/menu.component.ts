import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Ngrx
import * as fromApp from '../../store/app.reducer';

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
  public restaurant: Restaurant;
  public currentSelection = new MenuItem();
  public startCase = startCase;
  public sortBy = sortBy;

  constructor(private store: Store<fromApp.AppState>,
    // tslint:disable-next-line: align
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.setDisplayData();
  }

  setDisplayData() {
    this.store.select('restaurant')
      .pipe(map(restaurantState => restaurantState.restaurant)).subscribe((restaurant: Restaurant) => {
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
