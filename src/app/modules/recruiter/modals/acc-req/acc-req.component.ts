import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-acc-req',
    templateUrl: './acc-req.component.html',
    styleUrls: [ './acc-req.component.scss' ],
})
export class AccReqComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
