import { Label } from './../label';
import * as Konva from 'konva';

export class SegmentedBarItem {

    private static DEFAULT_WIDTH = 100;
    private static DEFAULT_HEIGHT = 30;

    text: string;

    x: number;

    y: number;

    width: number;

    height: number;

    selected = false;

    color: string;

    constructor(options: any = {}) {
        this.text = options.text || 'Tab Item';
        this.x = options.x || 0;
        this.y = options.y || 0;
        this.width = options.width || SegmentedBarItem.DEFAULT_WIDTH;
        this.height = options.height || SegmentedBarItem.DEFAULT_HEIGHT;
        this.color = options.color || '#0077FF';
    }

    get fill() {
        return this.selected ? this.color : 'white';
    }

    get view() {
        const group = new Konva.Group();
        const container = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            fill: this.fill,
            stroke: this.color,
            strokeWidth: 1,
        });
        const label = new Label();
        label.x = this.x;
        label.fontSize = 13;
        label.text = this.text;
        group.add(container);
        group.add(label.contentView);
        return group;
    }

}
