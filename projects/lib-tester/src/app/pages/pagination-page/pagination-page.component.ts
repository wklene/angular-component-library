// Angular Imports
import { Component } from '@angular/core';

// Component Library Imports
import { Acl } from 'projects/component-library/src/lib/types';

@Component({
    selector: 'app-pagination-page',
    templateUrl: './pagination-page.component.html',
    styleUrls: ['./pagination-page.component.scss']
})
export class PaginationPageComponent {
    public data: Acl.Pagination = { current: 0, totalPages: 2, visualOffset: 1 };

    constructor() { }

    public pageUpdate = (page: number): void => {
        console.log(`let's go to page ${page}`);
    }

}
