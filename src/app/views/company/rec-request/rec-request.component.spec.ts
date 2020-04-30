import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecRequestComponent } from './rec-request.component';

describe('RecRequestComponent', () => {
  let component: RecRequestComponent;
  let fixture: ComponentFixture<RecRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
