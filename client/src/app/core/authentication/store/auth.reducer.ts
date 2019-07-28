// Models
import { User } from './../../../models/AuthenticationModel';

export interface State {
    user: User;
}

const initialState: State = {
    user: null
};

export function authReducer(state = initialState, action) {
    return state;
}
