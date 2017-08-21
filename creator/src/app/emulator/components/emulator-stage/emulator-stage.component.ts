import { Component, Input, OnInit } from '@angular/core';

import * as Konva from 'konva';

import { SegmentedBar, Label } from './../../../common/models/konva/index';

@Component({
    selector: 'creator-emulator-stage',
    templateUrl: './emulator-stage.component.html',
    styleUrls: ['./emulator-stage.component.scss']
})
export class EmulatorStageComponent implements OnInit {

    @Input() width: any;
    @Input() height: any;

    constructor() { }

    ngOnInit() {

        console.log('width ', + this.width + ', height ' + this.height);

        var stage = new Konva.Stage({
            container: 'container',
            width: 400, //this.width,
            height: 900, //this.height
        });

        const label = new Label();
        label.color = 'blue';

        const segmentedBar = new SegmentedBar();

        // add the layer to the stage
        stage.add(label.view);
        stage.add(segmentedBar.view);

        console.log('init');


    }

}
