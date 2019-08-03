import { ActionReducerMap } from '@ngrx/store';

// Reducers
import * as fromCheckout from '../components/menu/store/menu.reducer';
import * as fromAuth from '../core/authentication/store/auth.reducer';
import * as fromRestaurant from '../components/store/restaurant.reducer';

// merge all our reducers to create a global state
export interface AppState {
    checkout: fromCheckout.State;
    authentication: fromAuth.State;
    restaurant: fromRestaurant.State;
}

// Create the reducer that we will inject into our entire app (app.module.ts)
export const appReducer: ActionReducerMap<AppState> = {
    restaurant: fromRestaurant.restaurantReducer,
    checkout: fromCheckout.checkoutReducer,
    authentication: fromAuth.authReducer
};
