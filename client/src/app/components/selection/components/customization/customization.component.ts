import { Component, OnInit, Input } from '@angular/core';

// Models
import { CustomizationOptions } from './../../../../models/RestaurantModel';

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.scss']
})
export class CustomizationComponent implements OnInit {
  @Input() options: CustomizationOptions;
  constructor() { }

  ngOnInit() {
    console.log(this.options);
  }

}
