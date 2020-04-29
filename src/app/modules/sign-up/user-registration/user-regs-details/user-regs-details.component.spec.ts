import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { TooltipLabel } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { RouterTestingModule } from '@angular/router/testing';
import { UserRegsDetailsComponent } from './user-regs-details.component';
describe('UserRegsDetailsComponent', () => {
  let component: UserRegsDetailsComponent;
  let fixture: ComponentFixture<UserRegsDetailsComponent>;
  beforeEach(() => {
    const ngbModalStub = () => ({
      open: (activationModalComponent, object) => ({
        componentInstance: { name: {} }
      })
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [UserRegsDetailsComponent],
      providers: [{ provide: NgbModal, useFactory: ngbModalStub }]
    });
    fixture = TestBed.createComponent(UserRegsDetailsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('separateDialCode defaults to: false', () => {
    expect(component.separateDialCode).toEqual(false);
  });
  it('SearchCountryField defaults to: SearchCountryField', () => {
    expect(component.SearchCountryField).toEqual(SearchCountryField);
  });
  it('TooltipLabel defaults to: TooltipLabel', () => {
    expect(component.TooltipLabel).toEqual(TooltipLabel);
  });
  it('CountryISO defaults to: CountryISO', () => {
    expect(component.CountryISO).toEqual(CountryISO);
  });
  it('preferredCountries defaults to: [, ]', () => {
    expect(component.preferredCountries).toEqual([,]);
  });
  describe('open', () => {
    it('makes expected calls', () => {
      const ngbModalStub: NgbModal = fixture.debugElement.injector.get(
        NgbModal
      );
      spyOn(ngbModalStub, 'open').and.callThrough();
      component.open();
      expect(ngbModalStub.open).toHaveBeenCalled();
    });
  });
});
