import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { CheckoutComponent } from './checkout.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        CheckoutComponent
    ],
    exports: [
        CheckoutComponent
    ]
})
export class CheckoutModule { }
