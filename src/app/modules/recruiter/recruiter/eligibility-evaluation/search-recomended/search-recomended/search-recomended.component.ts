import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SeekerDescriptionMessageComponent } from '../../seeker-description-message/seeker-description-message/seeker-description-message.component';

@Component({
	selector: 'app-search-recomended',
	templateUrl: './search-recomended.component.html',
	styleUrls: [ './search-recomended.component.scss' ]
})
export class SearchRecomendedComponent implements OnInit {
	constructor(private modalService: NgbModal) {}

	openSeekerDescription() {
		const modalRef = this.modalService.open(SeekerDescriptionMessageComponent);
		modalRef.componentInstance.name = 'World';
	}
	ngOnInit(): void {}
}
