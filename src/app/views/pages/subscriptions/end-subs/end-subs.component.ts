import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-end-subs',
    templateUrl: './end-subs.component.html',
    styleUrls: [ './end-subs.component.scss' ],
})
export class EndSubsComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}

    ngOnInit(): void {}
}
