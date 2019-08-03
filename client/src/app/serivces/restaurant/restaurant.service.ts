// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// NgRx
import * as RestaurantActions from '../../components/store/restaurant.action';
import * as fromApp from '../../store/app.reducer';
import { Store } from '@ngrx/store';

// RxJS
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

// Models
import { Restaurant } from 'src/app/models/RestaurantModel';

@Injectable({
  providedIn: 'root' // this adds it to app module without needing to register it as a service
})
export class RestaurantService {
  constructor(private http: HttpClient, private store: Store<fromApp.AppState>) { }

  public getRestaurant(): Observable<Restaurant> {
    return this.http.get<Restaurant>('http://localhost:3000/api/123/menu').pipe(map((restaurant) => {
      return restaurant;
    }),
      tap((restaurant) => {
        this.store.dispatch(new RestaurantActions.SetRestaurant(restaurant));
      })
    );
  }
}
