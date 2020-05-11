import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-job-description-confirm',
    templateUrl: './job-description-confirm.component.html',
    styleUrls: [ './job-description-confirm.component.scss' ],
})
export class JobDescriptionConfirmComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
