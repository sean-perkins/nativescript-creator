import { UIKitModule } from './../ui-kit/ui-kit.module';
import { CreatorRoutingModule } from './creator-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatorComponent } from './components/creator/creator.component';

@NgModule({
    imports: [
        CommonModule,
        CreatorRoutingModule,
        FlexLayoutModule,
        UIKitModule
    ],
    declarations: [CreatorComponent]
})
export class CreatorModule { }
