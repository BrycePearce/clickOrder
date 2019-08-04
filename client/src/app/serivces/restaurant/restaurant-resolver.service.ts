import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { take } from 'rxjs/operators';

// ngrx
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';

// Models
import { Restaurant } from 'src/app/models/RestaurantModel';

// Actions
import * as RestaurantActions from './../../components/store/restaurant.actions';
import * as fromApp from '../../store/app.reducer';

@Injectable({ providedIn: 'root' })
export class RestaurantResolverService implements Resolve<Restaurant> {
    constructor(private store: Store<fromApp.AppState>, private actions$: Actions) { }

    // resolve the route when SET_RESTAURANT is called, which is when the restaurant data is populated
    resolve() {
        this.store.dispatch(new RestaurantActions.FetchRestaurant());
        return this.actions$.pipe(ofType(RestaurantActions.SET_RESTAURANT), take(1));
    }
}
