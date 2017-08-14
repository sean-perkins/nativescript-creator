import { CreatorStoreModule } from './store/store.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
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
        BrowserModule,
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
