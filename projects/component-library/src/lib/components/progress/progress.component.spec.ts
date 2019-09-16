/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
    let component: ProgressComponent;
    let fixture: ComponentFixture<ProgressComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [],
            declarations: [ProgressComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProgressComponent);
        component = fixture.componentInstance;
        component.properties = { total: 100, stepTime: 5, showLabel: false };
        fixture.detectChanges();
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
