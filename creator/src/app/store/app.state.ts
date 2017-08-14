import { environment } from '../../environments/environment';
import { ActionReducer } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { combineReducers } from '@ngrx/store';
import * as appReducers from './reducers/index';
import * as appStates from './states/index';

export interface IAppState {
    creator: appStates.CreatorState;
};

const reducers = {
    creator: appReducers.creatorReducer,
};

const developmentReducer: ActionReducer<IAppState> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<IAppState> = combineReducers(reducers);

export function AppReducer(state: any, action: any) {
    if (environment.production) {
        return productionReducer(state, action);
    } else {
        return developmentReducer(state, action);
    }
}

export * from './states/index';
