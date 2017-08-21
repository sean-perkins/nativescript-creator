import * as Konva from 'konva';

export class Label {

    private _view: any;

    fontFamily: string = 'Helvetica';
    fontSize = 16;
    text = 'UILabel';
    color = '#000';
    x = 0;
    y = 0;

    draggable = true;

    constructor(options: any = {}) {
        this.draggable = !!options.draggable;
    }

    get contentView() {
        const label = new Konva.Label({
            x: this.x,
            y: this.y,
            draggable: this.draggable
        });

        label.add(new Konva.Text({
            text: this.text,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fill: this.color,
        }));

        return label;
    }

    get view() {
        const layer = new Konva.Layer({ draggable: true });
        const label = new Konva.Label({
            x: this.x,
            y: this.y,
            draggable: this.draggable
        });

        label.add(new Konva.Text({
            text: this.text,
            fontFamily: this.fontFamily,
            fontSize: this.fontSize,
            fill: this.color,
        }));

        layer.add(label);

        return layer;
    }

}
