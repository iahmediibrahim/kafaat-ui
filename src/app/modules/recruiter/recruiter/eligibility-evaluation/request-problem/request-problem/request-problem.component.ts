import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-request-problem',
	templateUrl: './request-problem.component.html',
	styleUrls: [ './request-problem.component.scss' ]
})
export class RequestProblemComponent implements OnInit {
	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit(): void {}
}
