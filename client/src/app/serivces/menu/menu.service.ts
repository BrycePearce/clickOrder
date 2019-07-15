// Angular
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// RxJS
import { Observable } from 'rxjs';

// Models
import { Menu } from 'src/app/models/landing-menu-models/Menu.model';

@Injectable({
  providedIn: 'root' // this adds it to app module without needing to register it as a service
})
export class MenuService {
  constructor(private http: HttpClient) { }

  public getMenu(): Observable<Menu> {
    return this.http.get<Menu>('http://localhost:3000/123/menu');
  }
}
