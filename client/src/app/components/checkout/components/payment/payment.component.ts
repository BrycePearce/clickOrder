// Customization Reference: https://stripe.com/docs/stripe-js/elements/quickstart

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  @ViewChild('stripePayment', { static: true }) stripePayment: ElementRef;
  stripe: stripe.Stripe;
  card: any; // stripe.elements.Element
  cardError: string;


  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.generateStripePaymentForm();
  }

  private generateStripePaymentForm() {
    // Generate the Stripe Interface with the public key
    this.stripe = Stripe('pk_test_LJ5I7HLrYp5PnotKiGevO5Fa00j6YGXDJT');

    // Generate the payment screen
    const elements: stripe.elements.Elements = this.stripe.elements();
    this.card = elements.create('card');

    // Inject it into the dom
    this.card.mount(this.stripePayment.nativeElement);

    // update when errors occur
    this.card.addEventListener('change', ({ error }) => {
      this.cardError = error && error.message;
    });
  }

  async onSubmit() {
    const { source, error } = await this.stripe.createSource(this.card);

    if (error) {
      // inform of error
      this.cardError = error.message;
    } else {
      console.log('success');
    }
  }

}
