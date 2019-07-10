import { MenuComponent } from './menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './components/card/card.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MenuComponent,
        CardComponent
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
