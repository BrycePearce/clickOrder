import { Selection } from './../../../models/RestaurantModel';
// Actions
import * as MenuActions from './menu.actions';

// Define the state for Menu Selections
export interface State {
    selections: Selection[];
}

const initialState: State = {
    selections: []
};

export function checkoutReducer(state = initialState, action: MenuActions.MenuActions) {
    switch (action.type) {
        case MenuActions.ADD_SELECTION: {
            return {
                ...state, // (best practice) create a new state
                selections: [...state.selections, action.payload] // and pass updated items with it
            };
        }
        case MenuActions.ADD_SELECTIONS: {
            return {
                ...state,
                selections: [...state.selections, ...action.payload] // spread operator to add new payload array to state.selections array
            };
        }
        default: {
            return state;
        }
    }
}

