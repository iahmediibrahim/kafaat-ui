import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeekerDescriptionMessageComponent } from './seeker-description-message.component';

describe('SeekerDescriptionMessageComponent', () => {
  let component: SeekerDescriptionMessageComponent;
  let fixture: ComponentFixture<SeekerDescriptionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeekerDescriptionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeekerDescriptionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
