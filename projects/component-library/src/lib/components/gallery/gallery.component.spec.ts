/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GalleryComponent } from './gallery.component';
import { PictureComponent } from '../picture/picture.component';
import { UploaderComponent } from '../uploader/uploader.component';
import { ImageComponent } from '../image/image.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Acl } from '../../types';

describe('GalleryComponent', () => {
    let component: GalleryComponent;
    let fixture: ComponentFixture<GalleryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [GalleryComponent, PictureComponent, UploaderComponent, ImageComponent, OverlayComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GalleryComponent);
        component = fixture.componentInstance;
        component.images = [];
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit on add', (done) => {
        component.add.subscribe((result: Acl.Image) => {
            expect(result).toEqual({ source: 'somesourcefile' });
            done();
        });
        component.addImage({ source: 'somesourcefile' });
    });


    it('should emit on delete', (done) => {
        component.delete.subscribe((result: number) => {
            expect(result).toEqual(1);
            done();
        });
        component.deleteImage(1);
    });

    it('should emit on fullImage', (done) => {
        component.fullImage.subscribe((result: number) => {
            expect(result).toEqual(4);
            done();
        });
        component.getFullImage(4);
    });

});
