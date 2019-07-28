import { Action } from '@ngrx/store';

// Models
import { MenuItem } from '../../../models/RestaurantModel';

// Action definitions
export const ADD_SELECTION = 'ADD_SELECTION';
export const ADD_SELECTIONS = 'ADD_SELECTIONS';

export class AddSelection implements Action {
    readonly type = ADD_SELECTION;
    constructor(public payload: MenuItem) { } // optional typing
}

export class AddSelections implements Action {
    readonly type = ADD_SELECTIONS;
    constructor(public payload: MenuItem[]) { }
}

export type MenuActions = AddSelection | AddSelections;
