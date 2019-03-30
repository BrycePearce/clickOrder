import { LandingMenuComponent } from './landing-menu.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LandingMenuComponent
    ],
    exports: [
        LandingMenuComponent
    ]
})

export class LandingMenuModule { }
