// Angular Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'acl-overlay',
    templateUrl: './overlay.component.html',
    styleUrls: ['./overlay.component.scss']
})
export class OverlayComponent {
    @Input() modal = false;

    private showOverlay = false;
    @Output() showChange = new EventEmitter();

    @Input()
    get show() {
        return this.showOverlay;
    }

    // setter for the show variable, emit event for two way binding
    set show(value: boolean) {
        this.showOverlay = value;
        this.showChange.emit(this.showOverlay);
    }

    // close the overlay, can be forced if modal/persistant is true
    public close = (forced: boolean = false): void => {
        if (this.modal === false || forced) {
            this.show = false;
        }
    }

    constructor() { }
}
