import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneMessageComponent } from './done-message.component';

describe('DoneMessageComponent', () => {
  let component: DoneMessageComponent;
  let fixture: ComponentFixture<DoneMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
