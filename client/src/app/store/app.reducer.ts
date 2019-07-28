import { ActionReducerMap } from '@ngrx/store';

// Reducers
import * as fromCheckout from '../components/menu/store/menu.reducer';
import * as fromAuth from '../core/authentication/store/auth.reducer';

// merge all our reducers to create a global state
export interface AppState {
    checkout: fromCheckout.State;
    authentication: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    checkout: fromCheckout.checkoutReducer,
    authentication: fromAuth.authReducer
};
