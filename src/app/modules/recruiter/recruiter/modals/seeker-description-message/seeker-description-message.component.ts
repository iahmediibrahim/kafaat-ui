import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReqMeetupComponent } from '../req-meetup/req-meetup.component';

@Component({
    selector: 'app-seeker-description-message',
    templateUrl: './seeker-description-message.component.html',
    styleUrls: [ './seeker-description-message.component.scss' ],
})
export class SeekerDescriptionMessageComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal, private modalService: NgbModal) {}
    openReqMeetup() {
        const modalRef = this.modalService.open(ReqMeetupComponent, {
            centered: true,
        });
        modalRef.componentInstance.name = 'World';
    }
    ngOnInit(): void {}
}
