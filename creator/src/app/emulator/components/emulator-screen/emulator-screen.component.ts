import { CreatorState } from './../../../store/states/creator.state';
import { Device } from './../../../common/models/Device';
import { Component, Input, ElementRef, AfterViewInit } from '@angular/core';
import { Actions } from '@ngrx/effects';


@Component({
    selector: 'creator-emulator-screen',
    templateUrl: './emulator-screen.component.html',
    styleUrls: ['./emulator-screen.component.scss']
})
export class EmulatorScreenComponent implements AfterViewInit {

    @Input() device: Device;

    private _screenWidth: number;
    private _screenHeight: number;
    private ratio: number;

    constructor(
        private element: ElementRef,
        private actions$: Actions) { }

    ngAfterViewInit() {
        window.onload = window.onresize = () => {
            this.calculateSizing();
        };

        this.actions$
            .ofType(CreatorState.ActionTypes.ROTATE_DEVICE)
            .do(() => {
                setTimeout(() => {
                    this.calculateSizing();
                });
            })
            .subscribe();
    }

    get screenHeight(): string {
        if (this._screenHeight) {
            return `${this._screenHeight}px`;
        }
        return null;
    }

    get screenWidth(): string {
        if (this._screenWidth) {
            return `${this._screenWidth}px`;
        }
        return null;
    }

    get padding(): string {
        if (this.device) {
            switch (this.device.deviceType) {
                case 'iphone':
                    if (this.device.isLandscape) {
                        return '3.5% 14% 3.5% 10%';
                    }
                    return '9% 28% 14%';
                case 'ipad':
                    if (this.device.isLandscape) {
                        return '3.5% 7.5% 3.5% 7%';
                    }
                    return '7.5% 14%';
            }
        }
        return null;
    }

    private calculateSizing(): void {
        const emulator: Element = this.element.nativeElement.parentNode;
        const screenSize = this.getBackgroundSize(emulator);
        this._screenHeight = this.device.isLandscape ? screenSize.height : emulator.clientHeight;
        this._screenWidth = screenSize.width;
    }

    private getBackgroundSize(elem): { height: any, width: any } {
        let computedStyle = getComputedStyle(elem);
        const image = new Image();
        let src = computedStyle.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2');
        let cssSize: any = computedStyle.backgroundSize;

        let elemW = parseInt(computedStyle.width.replace('px', ''), 10);
        let elemH = parseInt(computedStyle.height.replace('px', ''), 10);
        let elemDim = [elemW, elemH];
        let computedDim = [];
        image.src = src;
        this.ratio = image.width > image.height ? image.width / image.height : image.height / image.width;
        cssSize = cssSize.split(' ');
        computedDim[0] = cssSize[0];
        computedDim[1] = cssSize.length > 1 ? cssSize[1] : 'auto';
        if (cssSize[0] === 'cover') {
            if (elemDim[0] > elemDim[1]) {
                if (elemDim[0] / elemDim[1] >= this.ratio) {
                    computedDim[0] = elemDim[0];
                    computedDim[1] = 'auto';
                } else {
                    computedDim[0] = 'auto';
                    computedDim[1] = elemDim[1];
                }
            } else {
                computedDim[0] = 'auto';
                computedDim[1] = elemDim[1];
            }
        } else if (cssSize[0] === 'contain') {
            if (elemDim[0] < elemDim[1]) {
                computedDim[0] = elemDim[0];
                computedDim[1] = 'auto';
            } else {
                if (elemDim[0] / elemDim[1] >= this.ratio) {
                    computedDim[0] = 'auto';
                    computedDim[1] = elemDim[1];
                } else {
                    computedDim[1] = 'auto';
                    computedDim[0] = elemDim[0];
                }
            }
        } else {
            for (var i = cssSize.length; i--;) {
                if (cssSize[i].indexOf('px') > -1) {
                    computedDim[i] = cssSize[i].replace('px', '');
                } else if (cssSize[i].indexOf('%') > -1) {
                    computedDim[i] = elemDim[i] * (cssSize[i].replace('%', '') / 100);
                }
            }
        }
        if (computedDim[0] === 'auto' && computedDim[1] === 'auto') {
            computedDim[0] = image.width;
            computedDim[1] = image.height;
        } else {
            this.ratio = computedDim[0] === 'auto' ? image.height / computedDim[1] : image.width / computedDim[0];
            computedDim[0] = computedDim[0] === 'auto' ? image.width / this.ratio : computedDim[0];
            computedDim[1] = computedDim[1] === 'auto' ? image.height / this.ratio : computedDim[1];
        }
        return {
            width: computedDim[0],
            height: computedDim[1]
        };
    }


}
