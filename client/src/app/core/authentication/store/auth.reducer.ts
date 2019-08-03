import * as AuthActions from './auth.actions';

// Models
import { User } from './../../../models/AuthenticationModel';

export interface State {
    user: User;
}

const initialState: State = {
    user: null
};

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
    switch (action.type) {
        case (AuthActions.LOGIN):
            const user = new User();
            user.email = action.payload.email;
            user.id = action.payload.id;
            user.token = action.payload.token;
            return { ...state, user };
        case (AuthActions.LOGOUT):
            return { ...state, user: null };
        default: return state;
    }
}
