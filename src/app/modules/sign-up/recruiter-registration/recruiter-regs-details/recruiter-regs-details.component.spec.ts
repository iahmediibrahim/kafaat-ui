import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SearchCountryField } from 'ngx-intl-tel-input';
import { TooltipLabel } from 'ngx-intl-tel-input';
import { CountryISO } from 'ngx-intl-tel-input';
import { RouterTestingModule } from '@angular/router/testing';
import { RecruiterRegsDetailsComponent } from './recruiter-regs-details.component';
describe('RecruiterRegsDetailsComponent', () => {
  let component: RecruiterRegsDetailsComponent;
  let fixture: ComponentFixture<RecruiterRegsDetailsComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RecruiterRegsDetailsComponent]
    });
    fixture = TestBed.createComponent(RecruiterRegsDetailsComponent);
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
});
