import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const APP_ROUTES: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'creator'
    },
    {
        path: 'creator',
        pathMatch: 'full',
        loadChildren: 'app/+creator/creator.module#CreatorModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(APP_ROUTES, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
