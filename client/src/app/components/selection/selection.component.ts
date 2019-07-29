import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private store: Store<fromApp.AppState>, private router: Router) {
    const routerExtras = this.router.getCurrentNavigation().extras;
    this.selection = routerExtras.hasOwnProperty('state') ? routerExtras.state.selection : null;
  }

  // todo: should pass customization state in MenuItem object down to customization component, then update state here
  ngOnInit() {
    console.log('asd', this.selection);
  }

  addSelection() {
    this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }

  updateQuantity(type: string) {
    console.log(type);
    return;
  }
}
