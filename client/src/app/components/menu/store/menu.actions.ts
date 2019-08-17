import { Action } from '@ngrx/store';

// Models
import { Selection } from '../../../models/RestaurantModel'; // todo: probably need to create non-client model with more options like quantity/etc

// Action definitions
export const ADD_SELECTION = 'ADD_SELECTION';
export const ADD_SELECTIONS = 'ADD_SELECTIONS';

export class AddSelection implements Action {
    readonly type = ADD_SELECTION;
    constructor(public payload: Selection) { } // optional typing
}

export class AddSelections implements Action {
    readonly type = ADD_SELECTIONS;
    constructor(public payload: Selection[]) { }
}

export type MenuActions = AddSelection | AddSelections;
