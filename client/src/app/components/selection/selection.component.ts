import { Component, OnInit, Input } from '@angular/core';

// NgRx
import * as MenuActions from '../menu/store/menu.actions';
import { Store } from '@ngrx/store';

// Models
import { MenuItem } from '../../models/RestaurantModel';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() selection: MenuItem;

  public loadCustomization = false;

  constructor(private store: Store<{ checkout: { selections: MenuItem[] } }>) { }

  // todo: should pass customization state in MenuItem object down to customization component, then update state here
  ngOnInit() {
  }

  addSelection() {
    this.store.dispatch(new MenuActions.AddSelection(this.selection));
  }
}
