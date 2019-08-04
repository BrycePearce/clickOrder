import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { CustomizationComponent } from './components/customization/customization.component';
import { SelectionComponent } from './selection.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        SelectionComponent,
        CustomizationComponent
    ],
    exports: [
        SelectionComponent
    ]
})
export class SelectionModule { }
