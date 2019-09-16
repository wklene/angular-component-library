// Angular Imports
import { Component, OnInit } from '@angular/core';

// Third Party Imports
import { ReplaySubject } from 'rxjs';

// Component Library Imports
import { Acl } from 'projects/component-library/src/lib/types';

@Component({
    selector: 'app-picture-page',
    templateUrl: './picture-page.component.html',
    styleUrls: ['./picture-page.component.scss']
})
export class PicturePageComponent implements OnInit {
    public permissions: Acl.Permissions = { canRead: true, canWrite: false };
    public images$ = new ReplaySubject<Acl.Image[]>();
    public images: Acl.Image[] = [
        { id: 1, caption: 'picture 1', type: 'url', source: 'https://images.unsplash.com/photo-1568574097055-c552b8dfcc23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80' },
        { id: 2, caption: 'picture 2', type: 'url', source: 'https://images.unsplash.com/photo-1568453667945-234d7e521112?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1418&q=80' },
        { id: 3, caption: 'picture 3', type: 'url', source: 'https://images.unsplash.com/photo-1556909172-6ab63f18fd12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' }
    ];
    public image: Acl.Image = { type: 'url', source: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' };

    constructor() { }

    ngOnInit() {
        this.images$.next(this.images);
    }

    public fullImageEvent = (id: number): void => {
        //change image source file
        console.log('resizing image with id: ', id);
    }

    public addImageEvent = (image: Acl.Image): void => {
        console.log('adding image: ', image);
    }

    public deleteImageEvent = (id: number): void => {
        console.log('deleting image with id: ', id);
    }

    public changePermissions = (canRead: boolean, canWrite: boolean): void => {
        this.permissions.canRead = canRead;
        this.permissions.canWrite = canWrite;
    }

}
