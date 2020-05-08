import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-done-message',
	templateUrl: './done-message.component.html',
	styleUrls: [ './done-message.component.scss' ]
})
export class DoneMessageComponent implements OnInit {
	@Input() name;

	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit(): void {}
}
