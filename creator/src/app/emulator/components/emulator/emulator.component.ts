import { Device } from './../../../common/models/Device';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'creator-emulator',
    templateUrl: './emulator.component.html',
    styleUrls: ['./emulator.component.scss']
})
export class EmulatorComponent implements OnInit {

    @Input() device: Device

    constructor(private sanitizer: DomSanitizer) { }

    ngOnInit() {
    }

    get deviceImage() {
        if (this.device && this.device.imageRender) {
            return this.sanitizer.bypassSecurityTrustStyle(`url('${this.device.imageRender}')`);
        }
        return null;
    }

}
