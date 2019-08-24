import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { CheckoutComponent } from './checkout.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        CheckoutComponent
    ],
    exports: [
        CheckoutComponent
    ]
})
export class CheckoutModule { }
