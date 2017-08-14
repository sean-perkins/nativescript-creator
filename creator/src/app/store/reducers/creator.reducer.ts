import { CreatorState } from './../states/creator.state';
import { Action } from '@ngrx/store';

export function creatorReducer(
    state: CreatorState = new CreatorState,
    action: Action
) {
    switch (action.type) {
        case CreatorState.ActionTypes.ADD_PAGE:
            return Object.assign({}, state, {
                pages: [...state.pages, action.payload]
            })
        case CreatorState.ActionTypes.REMOVE_PAGE:
            return Object.assign({}, state, {
                pages: [...state.pages.filter(res => res !== action.payload)]
            });
        default:
            return state;
    }
}
