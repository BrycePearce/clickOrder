import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Component Modules
import { MenuModule } from './menu/menu.module';
import { CoreModule } from './core/core.module';

// Components
import { AppComponent } from './app.component';

@NgModule({
  imports: [ // modules
    BrowserModule,
    MenuModule,
    CoreModule
  ],
  declarations: [ // Components, directives and pipes are placed in module's declarations
    AppComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
