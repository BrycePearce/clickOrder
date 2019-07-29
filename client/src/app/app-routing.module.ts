import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SelectionComponent } from './components/selection/selection.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    { path: 'restaurant/:restaurantId', component: MenuComponent },
    { path: 'restaurant/:restaurantId/:selectionId/customization', component: SelectionComponent },
    {
        path: '**', redirectTo: 'restaurant/123'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
