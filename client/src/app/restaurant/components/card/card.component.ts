import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from 'src/app/models/RestaurantModel';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() display: Restaurant;

  constructor() { }

  ngOnInit() {
    console.log('we got', this.display);
  }

}
