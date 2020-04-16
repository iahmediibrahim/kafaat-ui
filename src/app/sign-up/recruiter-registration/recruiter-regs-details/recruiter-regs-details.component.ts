import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
    selector: 'app-recruiter-regs-details',
    templateUrl: './recruiter-regs-details.component.html',
    styleUrls: [ './recruiter-regs-details.component.scss' ],
})
export class RecruiterRegsDetailsComponent implements OnInit {
    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    TooltipLabel = TooltipLabel;
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [ CountryISO.UnitedStates, CountryISO.UnitedKingdom ];
    constructor() {}

    ngOnInit(): void {}
}
