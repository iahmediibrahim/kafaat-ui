import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ReqConfirmComponent } from '../req-confirm/req-confirm.component';

@Component({
    selector: 'app-org-request',
    templateUrl: './org-request.component.html',
    styleUrls: [ './org-request.component.scss' ],
})
export class OrgRequestComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(ReqConfirmComponent);
        modalRef.componentInstance.name = 'World';
    }
    ngOnInit(): void {}
}
