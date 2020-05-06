import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'app-seeker-description-message',
	templateUrl: './seeker-description-message.component.html',
	styleUrls: [ './seeker-description-message.component.scss' ]
})
export class SeekerDescriptionMessageComponent implements OnInit {
	@Input() name;

	constructor(public activeModal: NgbActiveModal) {}

	ngOnInit(): void {}
}
