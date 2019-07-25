import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// ngrx
import { StoreModule } from '@ngrx/store';
import { checkoutReducer } from './menu/store/menu.reducer';

// Component Modules
import { MenuModule } from './menu/menu.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [ // modules
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({ checkout: checkoutReducer }),
    MenuModule,
    CoreModule
  ],
  declarations: [ // Components, directives and pipes are placed in module's declarations
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
