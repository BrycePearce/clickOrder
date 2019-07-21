import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { AdminViewModule } from './admin-view/admin-view.module';

// Components
import { RestaurantComponent } from './restaurant.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
    imports: [
        CommonModule,
        AdminViewModule
    ],
    declarations: [
        RestaurantComponent,
        CardComponent,
    ],
    exports: [
        RestaurantComponent
    ]
})
export class RestaurantModule { }
