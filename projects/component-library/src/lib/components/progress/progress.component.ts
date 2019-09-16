// Angular Imports
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';


// Third Party Imports
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

// Component Library Imports
import { Acl } from '../../types';

@Component({
    selector: 'acl-progress',
    templateUrl: './progress.component.html',
    styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnChanges {
    public progress = { value: 0 };
    @Input() value = 0;

    public defaultProperties: Acl.Progress = { total: 100, stepTime: 10, showLabel: true };
    @Input()
    get properties(): Acl.Progress { throw new Error('Attribute "properties" is required'); }
    set properties(value: Acl.Progress) {
        Object.defineProperty(this, 'properties', { value, writable: true, configurable: true });
    }

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {

        if (changes.properties) {
            this.properties = Object.assign(this.defaultProperties, changes.properties.currentValue);
        }

        // if value changes, create fake "moving" progress based on the stepTime property
        if (changes.value) {
            const tempValue = Math.max(0, Math.min(changes.value.currentValue, this.properties.total));
            const myInterval = this.properties.stepTime / (tempValue - this.progress.value) * 1000;

            interval(myInterval).pipe(
                takeWhile(() => {
                    return this.progress.value !== tempValue;
                })
            ).subscribe(() => {
                if (this.progress.value < tempValue) {
                    this.progress.value++;
                } else {
                    this.progress.value--;
                }

            });

        }

    }

}
