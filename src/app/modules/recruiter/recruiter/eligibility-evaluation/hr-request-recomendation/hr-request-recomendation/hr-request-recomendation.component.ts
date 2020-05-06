import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RequestProblemComponent } from '../../request-problem/request-problem/request-problem.component';
@Component({
	selector: 'app-hr-request-recomendation',
	templateUrl: './hr-request-recomendation.component.html',
	styleUrls: [ './hr-request-recomendation.component.scss' ]
})
export class HrRequestRecomendationComponent implements OnInit {
	constructor(private modalService: NgbModal) {}
	openProblemRequest() {
		const modalRef = this.modalService.open(RequestProblemComponent);
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
