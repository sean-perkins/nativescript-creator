import { IAppState } from './../../../store/app.state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { default as creatorActions } from '../../../store/actions/creator.actions';

@Component({
    selector: 'creator-configurator',
    templateUrl: './configurator.component.html',
    styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {

    constructor(private store$: Store<IAppState>) { }

    ngOnInit() {
    }

    /**
     * Creates a new app page
     */
    addPage(): void {
        this.store$.dispatch(new creatorActions.AddPageAction);
    }

}
