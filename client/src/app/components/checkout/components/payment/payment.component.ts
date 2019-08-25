// todo: Customization Reference: https://stripe.com/docs/stripe-js/elements/quickstart
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

// Services
import { RestauarantService } from './../../../../serivces/restaurant/restauarant.service';
import { take } from 'rxjs/operators';

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
  loading = false; // todo: implement loading spinner


  constructor(private restauarantService: RestauarantService) { }

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
    this.loading = true;
    // Send the token to your server (todo: fix hardcoded name)
    this.stripe.createToken(this.card).then((token) => {
      if (token.error) {
        this.cardError = token.error.message;
      } else {
        // Send the token to your server (todo: fix hardcoded name)
        this.restauarantService.postTransaction('Burger-Kong', token).pipe(take(1)).subscribe(
          (res) => {
            console.log('success', res);
          },
          (err) => {
            console.log('failure', err);
          });
      }
      this.loading = false;
    });
  }

}
