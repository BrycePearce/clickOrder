import { Observable } from 'rxjs/internal/Observable';
import { Component, OnInit } from '@angular/core';

// Models
import { Restaurant, Selection } from 'src/app/models/RestaurantModel';

// NgRx
import * as fromApp from '../../store/app.reducer';
import { map, take } from 'rxjs/operators';
import { Store } from '@ngrx/store';

// Helpers
import { UtilityService } from './../../serivces/utilities/utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public restaurant: Restaurant;
  public checkout: Observable<{ selections: Selection[] }> = this.store.select('checkout');

  constructor(private store: Store<fromApp.AppState>, public utilityService: UtilityService) { }

  ngOnInit() {
  }
}
