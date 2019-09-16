// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Local Imports
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationPageComponent } from './pages/pagination-page/pagination-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProgressPageComponent } from './pages/progress-page/progress-page.component';
import { PopupPageComponent } from './pages/popup-page/popup-page.component';
import { PicturePageComponent } from './pages/picture-page/picture-page.component';
import { UploaderPageComponent } from './pages/uploader-page/uploader-page.component';

// Component Library Imports
import { AclComponentsModule } from 'projects/component-library/src/public-api';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    PaginationPageComponent,
    PicturePageComponent,
    PopupPageComponent,
    ProgressPageComponent,
    UploaderPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AclComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
