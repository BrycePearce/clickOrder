import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

// ngrx
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

// State management
import { RestaurantEffects } from './components/store/restaurant.effects';
import * as fromApp from './store/app.reducer'; // global state

// Component Modules
import { CheckoutModule } from './components/checkout/checkout.module';
import { MenuModule } from './components/menu/menu.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { SelectionModule } from './components/selection/selection.module';

// Services
import { UtilityService } from './serivces/utilities/utility.service';

@NgModule({
  imports: [ // modules
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([RestaurantEffects]),
    CoreModule,
    MenuModule,
    SelectionModule,
    CheckoutModule
  ],
  declarations: [ // Components, directives and pipes are placed in module's declarations
    AppComponent
  ],
  providers: [UtilityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
