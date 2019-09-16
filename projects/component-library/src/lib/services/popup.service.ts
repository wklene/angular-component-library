import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Acl } from '../types';

@Injectable({
    providedIn: 'root'
})
export class PopupService {
    private popup$ = new BehaviorSubject<any>(null);

    constructor() {
    }

    // hide popup if not persistant or if forced
    public hide = (forced: boolean = false): void => {
        const ntfs = this.popup$.getValue();
        if (forced === false && (ntfs && ntfs[0] && ntfs[0].persistant === true)) {
            return;
        }
        this.popup$.next(null);
    }

    // show simple popup with variable title and message and one fixed button "ok"
    public simple = (title: string, message: string, persistant: boolean = false): void => {
        const popup: Acl.Popup = {
            persistant,
            title,
            message,
            buttons: [
                {
                    label: 'ok', class: 'positive', action: () => {
                        this.hide(true);
                    }
                }
            ]
        };
        this.popup$.next(popup);
    }

    // show a regular popup all properties set in parameter
    public regular = (popup: Acl.Popup): void => {
        this.popup$.next(popup);
    }

    public get Popup$() { return this.popup$; }
}
