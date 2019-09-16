// Angular Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

// Third party imports
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject } from 'rxjs';

// Component Library Imports
import { Acl } from '../../types';

@Component({
    selector: 'acl-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
    @Input()
    get properties(): Acl.Pagination { throw new Error('Attribute "properties" is required'); }
    set properties(value: Acl.Pagination) {
        Object.defineProperty(this, 'properties', { value, writable: true, configurable: true });
    }

    @Output() public update: EventEmitter<number> = new EventEmitter();

    public pageField = new FormControl(null, { updateOn: 'blur' });

    public page$ = new Subject<any>();

    constructor() {

        // small debounce buffer on each update to improve speed
        this.page$.pipe(
            distinctUntilChanged(),
            debounceTime(250)
        ).subscribe((page) => {
            this.update.emit(page); // send update event to caller
        });

        this.pageField.valueChanges.pipe(
            debounceTime(200)
        ).subscribe(newPage => {
            this.page(newPage - this.properties.visualOffset);
        });

    }

    public canPrevious = (page: number): boolean => {
        return (page > 0);
    }

    public canNext = (page: number): boolean => {
        return (page < this.properties.totalPages - 1);
    }

    public previous = (): void => {
        this.page(this.properties.current - 1);
    }

    public next = (): void => {
        this.page(this.properties.current + 1);
    }

    // check if a specific number is valid or return a valid value instead
    private validateNumber = (pageNumber: number): number => {
        if (this.canPrevious(pageNumber) === false) {
            return 0;
        } else if (this.canNext(pageNumber) === false) {
            return this.properties.totalPages - 1;
        }
        return pageNumber;
    }

    public page = (pageNumber: number): void => {
        pageNumber = this.validateNumber(pageNumber); // validation
        this.properties.current = pageNumber; // update the current page

        // update the input field with optional visual offset, event is not emitted to prevent infinite loop
        this.pageField.setValue(pageNumber + this.properties.visualOffset, { emitEvent: false });

        this.page$.next(pageNumber); // broadcast using the page subject
    }

}
