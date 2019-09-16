/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PaginationComponent } from './pagination.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('PaginationComponent', () => {
    let component: PaginationComponent;
    let fixture: ComponentFixture<PaginationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [PaginationComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PaginationComponent);
        component = fixture.componentInstance;
        component.properties = { current: 0, totalPages: 10, visualOffset: 1 };
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should be able to go to a new page with range', () => {
        component.page(5);
        expect(component.properties.current).toEqual(5);
    });

    it('should be able to go to the next and previous page', () => {
        expect(component.canNext(component.properties.current)).toBeTruthy();
        component.next();
        expect(component.properties.current).toEqual(1);
        expect(component.canPrevious(component.properties.current)).toBeTruthy();
        component.previous();
        expect(component.properties.current).toEqual(0);
    });

    it('should not be able to navigate below 0 or beyond the total amount of pages', () => {
        component.page(-5);
        expect(component.properties.current).toEqual(0);
        component.page(100);
        expect(component.properties.current).toEqual(9);
    });

    it('should show visual offset on the pagefield', () => {
        component.page(5);
        expect(component.pageField.value).toEqual(6);
    });

});
