import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JobDescriptionConfirmComponent } from '../job-description-confirm/job-description-confirm.component';

@Component({
	selector: 'app-add-job-description',
	templateUrl: './add-job-description.component.html',
	styleUrls: [ './add-job-description.component.scss' ]
})
export class AddJobDescriptionComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	open() {
		const modalRef = this.modalService.open(JobDescriptionConfirmComponent);
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
