import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
    selector: 'app-company-regs-details',
    templateUrl: './company-regs-details.component.html',
    styleUrls: [ './company-regs-details.component.scss' ],
})
export class CompanyRegsDetailsComponent implements OnInit {
    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    TooltipLabel = TooltipLabel;
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [ CountryISO.UnitedStates, CountryISO.UnitedKingdom ];
    constructor() {}

    ngOnInit(): void {}
}
