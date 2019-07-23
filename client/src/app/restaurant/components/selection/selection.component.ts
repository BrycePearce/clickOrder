import { Component, OnInit, Input } from '@angular/core';

// Models
import { MenuItem } from '../../../models/RestaurantModel';

// Third Party
import startCase from 'lodash-es/startCase';


@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss']
})
export class SelectionComponent implements OnInit {
  @Input() menuItem: MenuItem;
  public startCase = startCase;
  constructor() { }

  ngOnInit() {
    console.log('we got', this.menuItem);
  }
}
