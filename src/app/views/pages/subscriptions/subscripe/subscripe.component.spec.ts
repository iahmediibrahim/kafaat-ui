import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscripeComponent } from './subscripe.component';

describe('SubscripeComponent', () => {
  let component: SubscripeComponent;
  let fixture: ComponentFixture<SubscripeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscripeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscripeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
