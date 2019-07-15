import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Details } from './../../../models/landing-menu-models/Menu.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() display: Details;

  constructor() { }

  ngOnInit() {
    console.log('we got', this.display);
  }

}
