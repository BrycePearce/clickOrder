
// Actions
import * as RestaurantActions from './restaurant.action';

// Models
import { Restaurant } from 'src/app/models/RestaurantModel';

export interface State {
    restaurant: Restaurant;
}

const initialState: State = {
    restaurant: new Restaurant()
};

export function restaurantReducer(state = initialState, action: RestaurantActions.RestaurantActions) {
    switch (action.type) {
        case RestaurantActions.SET_RESTAURANT: {
            return {
                ...state,
                restaurant: action.payload
            };
        }
        default: {
            return state;
        }
    }
}
