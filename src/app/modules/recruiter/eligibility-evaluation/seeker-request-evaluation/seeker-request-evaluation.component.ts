import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoneMessageComponent } from '../../modals/done-message/done-message.component';
@Component({
	selector: 'app-seeker-request-evaluation',
	templateUrl: './seeker-request-evaluation.component.html',
	styleUrls: [ './seeker-request-evaluation.component.scss' ]
})
export class SeekerRequestEvaluationComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	openDoneMessage() {
		const modalRef = this.modalService.open(DoneMessageComponent, {
			centered: true
		});
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
