import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerRequestEvaluationComponent } from './seeker-request-evaluation.component';

describe('SeekerRequestEvaluationComponent', () => {
  let component: SeekerRequestEvaluationComponent;
  let fixture: ComponentFixture<SeekerRequestEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerRequestEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerRequestEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
