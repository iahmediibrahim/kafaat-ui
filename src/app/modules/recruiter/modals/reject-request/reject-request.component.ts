import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-reject-request',
    templateUrl: './reject-request.component.html',
    styleUrls: [ './reject-request.component.scss' ],
})
export class RejectRequestComponent implements OnInit {
    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
