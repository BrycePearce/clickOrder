import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

// Services
import { MenuService } from './../serivces/menu/menu.service';

// Models
import { Menu } from './../models/landing-menu-models/Menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private menuService: MenuService) { }
  public categories: Array<string> = [];
  public menu: Menu = new Menu();

  ngOnInit() {
    this.setDisplayData();
  }

  private setDisplayData() {
    return this.menuService.getMenu().pipe(take(1)).subscribe(
      (menu) => {
        this.menu = menu;
      },
      (error) => { // todo:
      });
  }
}
