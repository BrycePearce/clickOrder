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
import { MenuModule } from './components/menu/menu.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';
import { SelectionModule } from './components/selection/selection.module';

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
  ],
  declarations: [ // Components, directives and pipes are placed in module's declarations
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
