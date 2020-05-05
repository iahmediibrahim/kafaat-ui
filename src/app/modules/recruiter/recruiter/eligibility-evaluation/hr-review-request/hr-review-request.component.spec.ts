import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrReviewRequestComponent } from './hr-review-request.component';

describe('HrReviewRequestComponent', () => {
  let component: HrReviewRequestComponent;
  let fixture: ComponentFixture<HrReviewRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrReviewRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrReviewRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
