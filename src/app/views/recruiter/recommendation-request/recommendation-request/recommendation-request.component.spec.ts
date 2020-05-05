import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationRequestComponent } from './recommendation-request.component';

describe('RecommendationRequestComponent', () => {
  let component: RecommendationRequestComponent;
  let fixture: ComponentFixture<RecommendationRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendationRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendationRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
