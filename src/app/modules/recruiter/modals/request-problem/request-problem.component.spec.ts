import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestProblemComponent } from './request-problem.component';

describe('RequestProblemComponent', () => {
  let component: RequestProblemComponent;
  let fixture: ComponentFixture<RequestProblemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestProblemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestProblemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
