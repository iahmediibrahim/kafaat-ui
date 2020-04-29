import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InviteComponent } from '../invite/invite.component';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: [ './nav.component.scss' ],
})
export class NavComponent implements OnInit {
    isMenuCollapsed = true;

    constructor(private modalService: NgbModal) {}

    ngOnInit(): void {}

    open() {
        const modalRef = this.modalService.open(InviteComponent);
        modalRef.componentInstance.name = 'World';
    }
}
