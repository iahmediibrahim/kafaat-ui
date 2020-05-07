import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReqMeetupComponent } from '../../modals/req-meetup/req-meetup.component';

@Component({
	selector: 'app-hr-evaluation',
	templateUrl: './hr-evaluation.component.html',
	styleUrls: [ './hr-evaluation.component.scss' ]
})
export class HrEvaluationComponent implements OnInit {
	constructor(private modalService: NgbModal) {}
	openReqMeetup() {
		const modalRef = this.modalService.open(ReqMeetupComponent, {
			size: 'lg',
			windowClass: 'big-modal',
			centered: true
		});
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
