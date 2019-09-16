// Angular Imports
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-progress-page',
    templateUrl: './progress-page.component.html',
    styleUrls: ['./progress-page.component.scss']
})
export class ProgressPageComponent implements OnInit {
    public progress = 0;
    public data;

    constructor() { }

    ngOnInit() {
    }

}
