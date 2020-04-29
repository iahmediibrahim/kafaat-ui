import { Component, OnInit } from '@angular/core';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivationModalComponent } from '../../activation-modal/activation-modal.component';

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
    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(ActivationModalComponent, { centered: true });
        modalRef.componentInstance.name = 'World';
    }

    ngOnInit(): void {}
}
