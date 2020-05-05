import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobDescriptionComponent } from './add-job-description.component';

describe('AddJobDescriptionComponent', () => {
  let component: AddJobDescriptionComponent;
  let fixture: ComponentFixture<AddJobDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
