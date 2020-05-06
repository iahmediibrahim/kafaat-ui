import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRecomendedComponent } from './search-recomended.component';

describe('SearchRecomendedComponent', () => {
  let component: SearchRecomendedComponent;
  let fixture: ComponentFixture<SearchRecomendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRecomendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRecomendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
