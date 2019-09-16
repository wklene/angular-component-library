// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Local Components
import { PaginationComponent } from './pagination/pagination.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PictureComponent } from './picture/picture.component';
import { ImageComponent } from './image/image.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ProgressComponent } from './progress/progress.component';
import { OverlayComponent } from './overlay/overlay.component';
import { PopupComponent } from './popup/popup.component';

// Local Services
import { PopupService } from '../services/popup.service';


@NgModule({
    declarations: [
        PaginationComponent,
        PopupComponent,
        OverlayComponent,
        PictureComponent,
        ImageComponent,
        GalleryComponent,
        UploaderComponent,
        ProgressComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [
        PopupService
    ],
    exports: [
        PaginationComponent,
        OverlayComponent,
        PopupComponent,
        GalleryComponent,
        ImageComponent,
        PictureComponent,
        UploaderComponent,
        ProgressComponent
    ]
})
export class AclComponentsModule { }
