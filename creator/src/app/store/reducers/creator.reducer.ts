import { CreatorState } from './../states/creator.state';
import { Action } from '@ngrx/store';
import { Device } from '../../common/models/Device';

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
        case CreatorState.ActionTypes.ROTATE_DEVICE:
            const device = new Device(state.device);
            device.orientation = device.isLandscape ? 'portrait' : 'landscape';
            return Object.assign({}, state, {
                device: device
            });
        default:
            return state;
    }
}
