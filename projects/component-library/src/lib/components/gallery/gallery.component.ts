// Angular Imports
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

// Component Library Imports
import { Acl } from '../../types';

@Component({
    selector: 'acl-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnChanges {
    @Input()
    get images(): Acl.Image[] { throw new Error('Attribute "images" is required'); }
    set images(value: Acl.Image[]) { Object.defineProperty(this, 'images', { value, writable: true, configurable: true }); }
    @Input() public permissions: Acl.Permissions = { canRead: true, canWrite: true };
    @Input() public limit = 25;
    @Output() public delete: EventEmitter<number> = new EventEmitter();
    @Output() public add: EventEmitter<Acl.Image> = new EventEmitter();
    @Output() public fullImage: EventEmitter<number> = new EventEmitter();

    constructor() { }

    // add an empty image as placeholder, to upload new images
    ngOnChanges(changes: SimpleChanges) {
        if (changes.images.currentValue && changes.images.currentValue.length < this.limit) {
            const newImage = { source: '' };
            if (changes.images.currentValue.indexOf(newImage) === -1) {
                changes.images.currentValue.push(newImage);
            }
        }
    }

    // add image
    public addImage = (image: Acl.Image): void => {
        this.add.emit(image);
        this.images.push({ source: '' });
    }

    // delete image
    public deleteImage = (id: number): void => {
        this.delete.emit(id);
    }

    // request full size image
    public getFullImage = (id: number): void => {
        this.fullImage.emit(id);
    }

}
