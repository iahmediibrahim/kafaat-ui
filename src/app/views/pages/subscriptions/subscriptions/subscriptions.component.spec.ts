import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SubscriptionsComponent } from './subscriptions.component';
describe('SubscriptionsComponent', () => {
    let component: SubscriptionsComponent;
    let fixture: ComponentFixture<SubscriptionsComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [ NO_ERRORS_SCHEMA ],
            declarations: [ SubscriptionsComponent ],
        });
        fixture = TestBed.createComponent(SubscriptionsComponent);
        component = fixture.componentInstance;
    });
    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
});
