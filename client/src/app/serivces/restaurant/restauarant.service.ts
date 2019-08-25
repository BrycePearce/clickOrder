import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { timeout } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestauarantService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  postTransaction(restaurantName: string, token: stripe.TokenResponse): Observable<Response> {
    return this.http.post<Response>(`http://localhost:3000/api/${restaurantName}/payment`, token, this.httpOptions).pipe(
      timeout(10000)
    );
  }
}
