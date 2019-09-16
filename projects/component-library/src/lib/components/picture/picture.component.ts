// Angular Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Component Library Imports
import { Acl } from '../../types';

@Component({
    selector: 'acl-picture',
    templateUrl: './picture.component.html',
    styleUrls: ['./picture.component.scss']
})
export class PictureComponent {
    public showPopup = false;
    public showUploader = false;
    @Input()
    get image(): Acl.Image { throw new Error('Attribute "image" is required'); }
    set image(value: Acl.Image) { Object.defineProperty(this, 'image', { value, writable: true, configurable: true }); }
    @Input() public permissions: Acl.Permissions = { canRead: true, canWrite: true };
    @Output() public delete: EventEmitter<number> = new EventEmitter();
    @Output() public add: EventEmitter<Acl.Image> = new EventEmitter();
    @Output() public fullImage: EventEmitter<number> = new EventEmitter();

    constructor() { }

    public deleteImage = (event: any): void => {
        event.stopPropagation(); // prevent click event from also triggering the getFullImage function
        this.delete.emit( this.image.id );
    }

    public addImage = (image: Acl.Image): void => {
        this.add.emit(image);
        this.image = image;
        this.showUploader = false;
    }

    public getFullImage = (): void => {
        this.showPopup = true;
        this.fullImage.emit( this.image.id );
    }

}
