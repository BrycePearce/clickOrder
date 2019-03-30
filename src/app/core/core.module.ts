// Core Module for sharing classes and singleton services across the application: https://angular.io/guide/styleguide#core-feature-module
// CoreModule exists to make commonly used singleton services available for use in the many other modules. Universal Components.
// tslint:disable-next-line: max-line-length
// e.g. Spinners / Menus that span the app / order list that spans the app (group order) / Error loggers / Headers / Footers / Authentication
// https://itnext.io/choosing-a-highly-scalable-folder-structure-in-angular-d987de65ec7
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [],
    declarations: [],
    providers: []
})
export class CoreModule { }
