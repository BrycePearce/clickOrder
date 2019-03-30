import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';

// Component Modules
import { LandingMenuModule } from './landing-menu/landing-menu.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [ // modules
    BrowserModule,
    LandingMenuModule,
    CoreModule,
    // AppRoutingModule
  ],
  declarations: [
    AppComponent, // components
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
