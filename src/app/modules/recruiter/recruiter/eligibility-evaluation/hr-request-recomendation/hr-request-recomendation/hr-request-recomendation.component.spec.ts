import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrRequestRecomendationComponent } from './hr-request-recomendation.component';

describe('HrRequestRecomendationComponent', () => {
  let component: HrRequestRecomendationComponent;
  let fixture: ComponentFixture<HrRequestRecomendationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrRequestRecomendationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrRequestRecomendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
