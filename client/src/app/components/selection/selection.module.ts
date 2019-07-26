import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Components
import { SelectionComponent } from './selection.component';
import { CustomizationComponent } from './components/customization/customization.component';

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
