import { Component, OnInit, Input } from '@angular/core';

// Models
import { MenuItem } from './../../../models/RestaurantModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() menuItem: MenuItem;

  constructor() { }

  ngOnInit() {
    console.log('we got', this.menuItem);
  }

}
