import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSubsComponent } from './end-subs.component';

describe('EndSubsComponent', () => {
    let component: EndSubsComponent;
    let fixture: ComponentFixture<EndSubsComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [ EndSubsComponent ],
            }).compileComponents();
        }),
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(EndSubsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
