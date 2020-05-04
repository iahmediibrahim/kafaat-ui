import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgRequestComponent } from './org-request.component';

describe('OrgRequestComponent', () => {
  let component: OrgRequestComponent;
  let fixture: ComponentFixture<OrgRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
