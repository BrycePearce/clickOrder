import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { RestaurantComponent } from './restaurant.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        RestaurantComponent,
        CardComponent
    ],
    exports: [
        RestaurantComponent
    ]
})
export class RestaurantModule { }
