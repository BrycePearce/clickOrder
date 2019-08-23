import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

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
export class CheckoutComponent implements OnInit {
  public checkout: Observable<{ selections: Selection[] }> = this.store.select('checkout');

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  wew(asd) {
    console.log(asd)
  }
}
