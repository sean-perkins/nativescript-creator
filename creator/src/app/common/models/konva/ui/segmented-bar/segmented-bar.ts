import { SegmentedBarItem } from './segmented-bar-item';
import * as Konva from 'konva';

export class SegmentedBar {

    items: SegmentedBarItem[] = [];

    selectedBackgroundColor: any;

    constructor(options: any = {}) {
        this.items = Array.isArray(options.items) ? options.items :
            [
                new SegmentedBarItem({ text: 'Tab 1' }),
                new SegmentedBarItem({ text: 'Tab 2' })
            ];
    }

    get view() {
        const layer = new Konva.Layer({
            draggable: true
        })
        const group = new Konva.Group();
        for (let i = 0; i < this.items.length; i++) {
            let segmentedGroup = new Konva.Group();
            const segmentedItem = this.items[i];
            segmentedItem.x = 100 * i;
            segmentedItem.selected = i === 0;
            segmentedGroup.add(segmentedItem.view);
            group.add(segmentedGroup);
        }
        layer.add(group);
        return layer;
    }

}
