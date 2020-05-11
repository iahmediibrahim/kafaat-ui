import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-req-meetup',
    templateUrl: './req-meetup.component.html',
    styleUrls: [ './req-meetup.component.scss' ],
})
export class ReqMeetupComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
