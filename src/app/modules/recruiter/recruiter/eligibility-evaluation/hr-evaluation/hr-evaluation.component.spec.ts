import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrEvaluationComponent } from './hr-evaluation.component';

describe('HrEvaluationComponent', () => {
  let component: HrEvaluationComponent;
  let fixture: ComponentFixture<HrEvaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrEvaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrEvaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
