// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Models
import { Restaurant } from 'src/app/models/RestaurantModel';

@Injectable({
  providedIn: 'root' // this adds it to app module without needing to register it as a service
})
export class RestaurantService {
  constructor(private http: HttpClient) { }

  public getRestaurant(): Observable<Restaurant> {
    return this.http.get<Restaurant>('http://localhost:3000/api/123/menu');
  }
}
