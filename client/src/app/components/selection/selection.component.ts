import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

// NgRx
import * as MenuActions from '../menu/store/menu.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

// Models
import { MenuItem } from '../../models/RestaurantModel';

// Third Party
import find from 'lodash-es/find';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  public loadCustomization = false;
  public selection: MenuItem;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.loadSelection();
  }

  loadSelection() {
    // todo: handle invalid cases. Navigate to 'Not Found' component
    const selectionIndexRouteSegment = this.route.snapshot.url[0].path;
    this.store.select('restaurant')
      .pipe(map((restaurantState) => find(restaurantState.restaurant.menu, { _id: selectionIndexRouteSegment })))
      .subscribe((selection: MenuItem) => {
        this.selection = selection;
      });
  }

  addSelection() {
    this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }
}
