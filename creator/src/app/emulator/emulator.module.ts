import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmulatorComponent } from './components/emulator/emulator.component';
import { EmulatorScreenComponent } from './components/emulator-screen/emulator-screen.component';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [
        CommonModule,
        EffectsModule
    ],
    declarations: [EmulatorComponent, EmulatorScreenComponent],
    exports: [
        EmulatorComponent
    ]
})
export class EmulatorModule { }
