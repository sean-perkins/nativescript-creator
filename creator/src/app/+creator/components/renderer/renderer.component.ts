import { Device } from './../../../common/models/Device';
import { Observable } from 'rxjs/Observable';
import { IAppState, getDevice } from './../../../store/app.state';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

import { default as creatorActions } from '../../../store/actions/creator.actions';

@Component({
    selector: 'creator-renderer',
    templateUrl: './renderer.component.html',
    styleUrls: ['./renderer.component.scss']
})
export class RendererComponent implements OnInit {

    device$: Observable<Device>;

    constructor(private store$: Store<IAppState>) { }

    ngOnInit() {
        this.device$ = this.store$.let(getDevice);
    }

    rotateDevice(): void {
        this.store$.dispatch(new creatorActions.RotateDeviceAction);
    }

}
