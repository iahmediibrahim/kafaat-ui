import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionConfirmComponent } from './job-description-confirm.component';

describe('JobDescriptionConfirmComponent', () => {
  let component: JobDescriptionConfirmComponent;
  let fixture: ComponentFixture<JobDescriptionConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDescriptionConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptionConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
