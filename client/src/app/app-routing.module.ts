import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SelectionComponent } from './components/selection/selection.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    { path: '', redirectTo: 'restaurant/123', pathMatch: 'full' },
    { path: 'restaurant/:restaurantId', component: MenuComponent },
    { path: 'restaurant/:restaurantId/customization', component: SelectionComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
