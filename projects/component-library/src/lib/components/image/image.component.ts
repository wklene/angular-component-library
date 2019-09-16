// Angular Imports
import { Component, Input } from '@angular/core';

@Component({
    selector: 'acl-image',
    templateUrl: './image.component.html',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent {
    @Input() public source: string;
    @Input() public type: string;
    @Input() public mimeType: string;

    constructor() { }
}
