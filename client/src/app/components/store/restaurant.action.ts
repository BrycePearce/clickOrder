import { Action } from '@ngrx/store';

// Models
import { Restaurant } from './../../models/RestaurantModel';

// Action definitions
export const SET_RESTAURANT = '[Restaurant] Set Restaurant';

export class SetRestaurant implements Action {
    readonly type = SET_RESTAURANT;
    constructor(public payload: Restaurant) { }
}

export type RestaurantActions = SetRestaurant;
