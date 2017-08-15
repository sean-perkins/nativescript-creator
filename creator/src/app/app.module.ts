import { CreatorStoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/app.state';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        CreatorStoreModule,
        StoreModule.provideStore(AppReducer),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
