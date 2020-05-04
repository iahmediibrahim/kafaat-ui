import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewJobDescriptionComponent } from './view-job-description.component';

describe('ViewJobDescriptionComponent', () => {
  let component: ViewJobDescriptionComponent;
  let fixture: ComponentFixture<ViewJobDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewJobDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
