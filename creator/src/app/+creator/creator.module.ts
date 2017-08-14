import { UIKitModule } from './../ui-kit/ui-kit.module';
import { CreatorRoutingModule } from './creator-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CreatorComponent } from './components/creator/creator.component';
import { RendererComponent } from './components/renderer/renderer.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { ExtenderComponent } from './components/extender/extender.component';

@NgModule({
    imports: [
        CommonModule,
        CreatorRoutingModule,
        FlexLayoutModule,
        UIKitModule
    ],
    declarations: [CreatorComponent, RendererComponent, ConfiguratorComponent, ExtenderComponent]
})
export class CreatorModule { }
