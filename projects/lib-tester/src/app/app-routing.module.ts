import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { PopupPageComponent } from './pages/popup-page/popup-page.component';
import { PicturePageComponent } from './pages/picture-page/picture-page.component';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'pagination', component: PaginationPageComponent },
    { path: 'progress', component: ProgressPageComponent },
    { path: 'popups', component: PopupPageComponent },
    { path: 'pictures', component: PicturePageComponent },
    { path: 'uploader', component: UploaderPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
