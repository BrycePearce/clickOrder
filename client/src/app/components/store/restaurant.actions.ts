import { Action } from '@ngrx/store';

// Models
import { Restaurant } from '../../models/RestaurantModel';

// Action definitions
export const FETCH_RESTAURANT = '[Restaurant] Fetch Restaurant';
export const SET_RESTAURANT = '[Restaurant] Set Restaurant';

export class SetRestaurant implements Action {
    readonly type = SET_RESTAURANT;
    constructor(public payload: Restaurant) { }
}

export class FetchRestaurant implements Action {
    readonly type = FETCH_RESTAURANT;
}

export type RestaurantActions = SetRestaurant;
