import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { PaymentComponent } from './payment.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        PaymentComponent
    ],
    exports: [
        PaymentComponent
    ]
})
export class PaymentModule { }
