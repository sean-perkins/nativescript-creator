import { Component, Input, OnInit } from '@angular/core';

import * as Konva from 'konva';

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
            height: 900, //this.height,
            draggable: true
        });

        // then create layer
        var layer = new Konva.Layer();

        // create our shape
        // var circle = new Konva.Circle({
        //     x: stage.getWidth() / 2,
        //     y: stage.getHeight() / 2,
        //     radius: 70,
        //     fill: 'red',
        //     stroke: 'black',
        //     strokeWidth: 4
        // });

        const label = new Konva.Label({
            x: 20,
            y: 100
        });

        label.add(new Konva.Text({
            text: 'UILabel',
            fontFamily: 'Calibri',
            fontSize: 16
        }));

        // add the shape to the layer
        layer.add(label);
        // add the layer to the stage
        stage.add(layer);

        console.log('init');

    }

}
