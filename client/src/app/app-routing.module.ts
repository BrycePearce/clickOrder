import { RestaurantResolverService } from './serivces/restaurant/restaurant-resolver.service';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { SelectionComponent } from './components/selection/selection.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { MenuComponent } from './components/menu/menu.component';

const routes: Routes = [
    {
        path: '',
        resolve: [RestaurantResolverService],
        children: [
            {
                path: ':name',
                children: [
                    {
                        path: '',
                        component: MenuComponent,
                        pathMatch: 'full'
                    },
                    {
                        path: ':category/:selectionId',
                        component: SelectionComponent
                    },
                    {
                        path: 'checkout',
                        component: CheckoutComponent
                    }
                ],
            },
            {
                path: '**', redirectTo: 'Burger-Kong'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
