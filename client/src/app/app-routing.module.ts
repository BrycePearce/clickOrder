import { RestaurantResolverService } from './serivces/restaurant/restaurant-resolver.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SelectionComponent } from './components/selection/selection.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {
        path: '',
        resolve: [RestaurantResolverService],
        children: [
            {
                path: 'restaurant/:restaurantId',
                component: MenuComponent
            },
            {
                path: 'restaurant/:restaurantId/:selectionId/customization',
                component: SelectionComponent
            },
            {
                path: '**', redirectTo: 'restaurant/123'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
