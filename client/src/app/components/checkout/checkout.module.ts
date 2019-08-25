import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { CheckoutComponent } from './checkout.component';

// Modules
import { PaymentModule } from './components/payment/payment.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PaymentModule
    ],
    declarations: [
        CheckoutComponent
    ],
    exports: [
        CheckoutComponent
    ]
})
export class CheckoutModule { }
