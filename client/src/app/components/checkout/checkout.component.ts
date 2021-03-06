import { Observable } from 'rxjs/internal/Observable';
import { Component } from '@angular/core';

// Services
import { UtilityService } from './../../serivces/utilities/utility.service';

// Models
import { Selection } from '../../models/RestaurantModel';

// NgRx
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  public checkout: Observable<{ selections: Selection[] }> = this.store.select('checkout');

  constructor(private store: Store<fromApp.AppState>, public utilityService: UtilityService) { }

  getSideList(selection: Selection) {
    const sides = selection.comboSelections.sides;
    const drinks = selection.comboSelections.drinks;
    return [...sides, ...drinks];
  }
}
