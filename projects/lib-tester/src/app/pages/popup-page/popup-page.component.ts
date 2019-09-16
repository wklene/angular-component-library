// Angular Imports
import { Component, OnInit } from '@angular/core';

// Component Library Imports
import { PopupService } from 'projects/component-library/src/public-api';

@Component({
    selector: 'app-popup-page',
    templateUrl: './popup-page.component.html',
    styleUrls: ['./popup-page.component.scss']
})
export class PopupPageComponent implements OnInit {

    constructor(private popups: PopupService) { }

    ngOnInit() {
    }

    public simplePopup = (): void => {
        this.popups.simple(
            'Information.',
            'Nulla non convallis ex. Integer ultrices bibendum molestie. Suspendisse potenti. Donec non consectetur leo. Suspendisse potenti. Aliquam facilisis viverra elit, eget mollis urna cursus et. Nullam quis odio blandit tellus laoreet malesuada. Pellentesque ut scelerisque dolor.'
        );
    }

    public advancedPopup = (): void => {

        this.popups.regular({
            persistant: true,
            title: `Are you sure?`,
            message: `Do you really want to leave this site? You will lose any data you are currently working on. Click on cancel to stay on this page or leave to proceed.`,
            buttons: [
                {
                    label: 'cancel', action: () => {
                        this.popups.hide(true);
                    }
                },
                {
                    label: 'leave', class: 'negative', action: () => {
                        // leave action here
                        this.popups.hide(true);
                    }
                }
            ]
        });
    }

    public dialogPopup = (): void => {
        this.popups.regular({
            persistant: true,
            title: `New application`,
            message: `Please fill in in the required details to proceed with your application.`,
            dialog: {
                inputs: [
                    { name: 'name', required: true, type: 'text' },
                    { name: 'email', required: true, type: 'email' },
                    { name: 'date of birth', required: true, type: 'date', placeholder: 'YYYY-MM-DD' },
                ]
            },
            buttons: [
                {
                    label: 'cancel', action: () => {
                        this.popups.hide(true);
                    }
                },
                {
                    label: 'apply', required: true, class: 'positive', action: (data) => {
                        console.log('application received', data);
                        this.popups.hide(true);
                    }
                }
            ]
        });
    }

}
