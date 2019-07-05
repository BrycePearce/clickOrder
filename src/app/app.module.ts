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
  declarations: [ // Components, directives and pipes are placed in module's declarations
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
