import { Action } from '@ngrx/store';

// Models
import { MenuItem } from '../../../models/RestaurantModel';

// Action definitions
export const ADD_SELECTION = 'ADD_SELECTION';

export class AddSelection implements Action {
    readonly type = ADD_SELECTION;
    constructor(public payload: MenuItem) { } // optional typing
}
