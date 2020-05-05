import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-req-confirm',
    templateUrl: './req-confirm.component.html',
    styleUrls: [ './req-confirm.component.scss' ],
})
export class ReqConfirmComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
