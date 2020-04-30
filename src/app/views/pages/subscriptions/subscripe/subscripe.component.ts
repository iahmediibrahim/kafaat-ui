import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EndSubsComponent } from '../end-subs/end-subs.component';

@Component({
    selector: 'app-subscripe',
    templateUrl: './subscripe.component.html',
    styleUrls: [ './subscripe.component.scss' ],
})
export class SubscripeComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(EndSubsComponent);
        modalRef.componentInstance.name = 'World';
    }
    ngOnInit(): void {}
}
