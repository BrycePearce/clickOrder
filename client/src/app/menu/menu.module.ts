import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Modules
import { SelectionModule } from './components/selection/selection.module';
import { AdminViewModule } from './admin-view/admin-view.module';

// Components
import { MenuComponent } from './menu.component';

@NgModule({
    imports: [
        CommonModule,
        AdminViewModule,
        SelectionModule
    ],
    declarations: [
        MenuComponent
    ],
    exports: [
        MenuComponent
    ]
})
export class MenuModule { }
