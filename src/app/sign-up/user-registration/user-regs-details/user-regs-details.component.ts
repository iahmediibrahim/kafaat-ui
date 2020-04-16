import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
    selector: 'app-user-regs-details',
    templateUrl: './user-regs-details.component.html',
    styleUrls: [ './user-regs-details.component.scss' ],
})
export class UserRegsDetailsComponent implements OnInit {
    separateDialCode = false;
    SearchCountryField = SearchCountryField;
    TooltipLabel = TooltipLabel;
    CountryISO = CountryISO;
    preferredCountries: CountryISO[] = [ CountryISO.UnitedStates, CountryISO.UnitedKingdom ];
    constructor() {}

    ngOnInit(): void {}
}
