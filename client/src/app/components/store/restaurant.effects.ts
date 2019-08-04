import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// ngrx
import { Actions, Effect, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';

// state
import { Restaurant } from './../../models/RestaurantModel';
import * as RestaurantActions from './restaurant.actions';

@Injectable()
export class RestaurantEffects {
    constructor(private actions$: Actions, private http: HttpClient) { }

    @Effect()
    fetchRestaurant = this.actions$.pipe(ofType(RestaurantActions.FETCH_RESTAURANT),
        switchMap(() => {
            return this.http.get<Restaurant>('http://localhost:3000/api/123/menu');
        }),
        map(restaurant => {
            return new RestaurantActions.SetRestaurant(restaurant);
        })
    );
}
