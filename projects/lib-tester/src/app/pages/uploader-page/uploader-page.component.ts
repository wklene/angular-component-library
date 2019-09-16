// Angular Imports
import { Component } from '@angular/core';

// Component Library Imports
import { Acl } from 'projects/component-library/src/lib/types';

@Component({
    selector: 'app-uploader-page',
    templateUrl: './uploader-page.component.html',
    styleUrls: ['./uploader-page.component.scss']
})
export class UploaderPageComponent {

    constructor() { }

    public uploadEvent = ( newFile: Acl.File ): void => {
        console.log('this is a new file', newFile);
    }

}
