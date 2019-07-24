// Actions
import * as MenuActions from './menu.actions';

// Models
import { MenuItem } from 'src/app/models/RestaurantModel';

const initialState = {
    selections: [new MenuItem()] // todo: add customization options to MenuItem type?
};

export function checkoutReducer(state = initialState, action: MenuActions.AddSelection) {
    switch (action.type) {
        case MenuActions.ADD_SELECTION: {
            return {
                ...state, // (best practice) create a new state
                selections: [...state.selections, action.payload] // and pass updated items with it
            };
        }
        default: {
            return state;
        }
    }
}

