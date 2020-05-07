import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInterviewComponent } from './request-interview.component';

describe('RequestInterviewComponent', () => {
  let component: RequestInterviewComponent;
  let fixture: ComponentFixture<RequestInterviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestInterviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestInterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
