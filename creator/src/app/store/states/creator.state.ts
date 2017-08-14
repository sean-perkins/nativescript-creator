import { Page } from './../../common/models/index';
import { IAppState } from './../app.state';
import { Observable } from 'rxjs/Observable';
import { compose } from '@ngrx/core/compose';

export class CreatorState {

    static NAMESPACE = 'Creator';

    static ActionTypes = {
        ADD_PAGE: `${CreatorState.NAMESPACE} Add Page`,
        REMOVE_PAGE: `${CreatorState.NAMESPACE} Remove Page`
    }

    static state$(state$: Observable<IAppState>): Observable<CreatorState> {
        return state$.select(state => state.creator);
    }

    static getPages(state$: Observable<CreatorState>) {
        return state$.select(state => state.pages);
    }

    // The collection of Page objects for the creator app
    pages: Page[];

    constructor(options: CreatorState = <CreatorState>{}) {
        this.pages = Array.isArray(options.pages) ?
            options.pages.map(res => new Page(res)) : [];
    }

}

export const getPages: any = compose(CreatorState.getPages, CreatorState.state$);
