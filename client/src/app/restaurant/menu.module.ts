import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { AdminViewModule } from './admin-view/admin-view.module';

// Components
import { MenuComponent } from './menu.component';
import { SelectionComponent } from './components/selection/selection.component';
import { CustomizationComponent } from './components/customization/customization.component';

@NgModule({
    imports: [
        CommonModule,
        AdminViewModule
    ],
    declarations: [
        MenuComponent,
        SelectionComponent,
        CustomizationComponent,
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
