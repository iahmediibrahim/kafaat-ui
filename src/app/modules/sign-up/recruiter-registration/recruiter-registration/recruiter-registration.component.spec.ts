import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RecruiterRegistrationComponent } from './recruiter-registration.component';
describe('RecruiterRegistrationComponent', () => {
  let component: RecruiterRegistrationComponent;
  let fixture: ComponentFixture<RecruiterRegistrationComponent>;
  beforeEach(() => {
    const ngFormStub = () => ({ value: {} });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RecruiterRegistrationComponent],
      providers: [
        { provide: NgForm, useFactory: ngFormStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(RecruiterRegistrationComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('passwordType defaults to: password', () => {
    expect(component.passwordType).toEqual('password');
  });
  it('passwordShown defaults to: false', () => {
    expect(component.passwordShown).toEqual(false);
  });
  describe('onApply', () => {
    it('makes expected calls', () => {
      const ngFormStub: NgForm = fixture.debugElement.injector.get(NgForm);
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.onApply(ngFormStub);
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
