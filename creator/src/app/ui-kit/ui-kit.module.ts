import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageSectionComponent } from './components/page-section/page-section.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PageSectionComponent
    ],
    exports: [
        PageSectionComponent
    ]
})
export class UIKitModule { }
