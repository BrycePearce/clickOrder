import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

// NgRx
import * as MenuActions from '../menu/store/menu.actions';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

// Models
import { MenuItem } from '../../models/RestaurantModel';

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
    const category = this.route.snapshot.url[0].path;
    const selectionId = this.route.snapshot.url[1].path;
    this.store.select('restaurant')
      .pipe(
        map(restaurantState => restaurantState.restaurant.groupedMenu[category]
          .find(selection => selection._id === selectionId)
        )
      ).subscribe(
        (selection: MenuItem) => {
          if (!selection) {
            console.log('invalid selection, todo: handle');
            return;
          }
          console.log('asd', selection);
          this.selection = selection;
        },
        (err) => {
          console.log('category was invalid, todo: handle', err);
        });
  }

  addSelection() {
    this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }

  updateQuantity(modifier: string) {
    return;
  }
}
