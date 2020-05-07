import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqMeetupComponent } from './req-meetup.component';

describe('ReqMeetupComponent', () => {
  let component: ReqMeetupComponent;
  let fixture: ComponentFixture<ReqMeetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqMeetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqMeetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
