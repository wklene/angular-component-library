// Angular Imports
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl, AbstractControl, ValidationErrors } from '@angular/forms';

// Third Party Imports
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as momentNs from 'moment';
const moment = momentNs; // fix for ng-packgr

// Component Library Imports
import { PopupService } from '../../services/popup.service';
import { Acl } from '../../types';

@Component({
    selector: 'acl-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent implements OnInit {
    private unsubscribe$ = new Subject();

    public popup: Acl.Popup;
    public dialogForm: FormGroup;

    constructor(private popups: PopupService) { }

    public clear = (): void => {
        this.popups.hide();
        this.reset();
    }

    public reset = (): void => {
        this.dialogForm.reset();
    }

    public doAction = (button: Acl.PopupButton, event: UIEvent): void => {
        this.dialogForm.markAllAsTouched(); // trigger all validation on the inputs
        if (button.required && this.dialogForm.valid === false) {
            return;
        } else {
            button.action(this.dialogForm.value, event);
            this.reset();
        }
    }

    private initializePopup = (): void => {
        this.dialogForm = new FormGroup({});
        if (this.popup.dialog) {
            // loop inputs and add to form with appropriate validation based on input type
            for (const input of this.popup.dialog.inputs) {
                let validation = input.required ? [Validators.required] : [];
                if (input.type === 'date') {
                    validation = [...validation, this.dateValidator];
                } else if (input.type === 'email') {
                    validation = [...validation, Validators.email];
                }
                this.dialogForm.addControl(input.name, new FormControl('', validation));
            }
        }
    }

    // validator for date inputs
    private dateValidator = (control: AbstractControl): ValidationErrors => {
        const val = moment(control.value);
        if (!val.isValid()) {
            return { invalidDate: true };
        }
        return null;
    }

    ngOnInit() {
        // create hook on the popups service to check for new popups
        this.popups.Popup$.pipe(
            takeUntil(this.unsubscribe$)
        ).subscribe(result => {
            this.popup = result;
            if (this.popup) {
                this.initializePopup();
            }
        });
    }

    ngOnDestroy() {
        // method to property clean up observable
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

}
