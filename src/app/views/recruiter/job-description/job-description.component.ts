import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewJobDescriptionComponent } from '../view-job-description/view-job-description.component';

@Component({
	selector: 'app-job-description',
	templateUrl: './job-description.component.html',
	styleUrls: [ './job-description.component.scss' ]
})
export class JobDescriptionComponent implements OnInit {
	constructor(private modalService: NgbModal) {}
	viewJobDescription() {
		const modalRef = this.modalService.open(ViewJobDescriptionComponent);
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
