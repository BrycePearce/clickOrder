import { HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { BannerComponent } from './banner/banner.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    BannerComponent,
    MenuComponent,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    MenuComponent
  ]
})
export class HeaderModule { }
