/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { PictureComponent } from './picture.component';
import { UploaderComponent } from '../uploader/uploader.component';
import { ImageComponent } from '../image/image.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OverlayComponent } from '../overlay/overlay.component';
import { Acl } from '../../types';

describe('PictureComponent', () => {
    let component: PictureComponent;
    let fixture: ComponentFixture<PictureComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [PictureComponent, UploaderComponent, ImageComponent, OverlayComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PictureComponent);
        component = fixture.componentInstance;
        component.image = { id: 4, source: 'source' };
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
            expect(result).toEqual(4);
            done();
        });
        component.deleteImage();
    });

    it('should emit on fullImage', (done) => {
        component.fullImage.subscribe((result: number) => {
            expect(result).toEqual(4);
            done();
        });
        component.getFullImage();
    });


    it('should show popup on fullImage', () => {
        component.getFullImage();
        expect(component.showPopup).toBeTruthy();
    });

});
