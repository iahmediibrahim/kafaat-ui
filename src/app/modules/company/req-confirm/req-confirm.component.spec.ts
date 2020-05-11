import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqConfirmComponent } from './req-confirm.component';

describe('ReqConfirmComponent', () => {
  let component: ReqConfirmComponent;
  let fixture: ComponentFixture<ReqConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
