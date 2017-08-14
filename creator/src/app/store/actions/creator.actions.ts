import { Page } from './../../common/models/Page';
import { CreatorState } from './../states/creator.state';
import { Action } from '@ngrx/store';

export default class CreatorActions {

    static AddPageAction = class implements Action {
        readonly type = CreatorState.ActionTypes.ADD_PAGE;
        constructor(public payload = new Page()) { }
    }

    static RemovePageAction = class implements Action {
        readonly type = CreatorState.ActionTypes.REMOVE_PAGE;
        constructor(public payload: Page) { }
    }
}

