import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-invite',
    templateUrl: './invite.component.html',
    styleUrls: [ './invite.component.scss' ],
})
export class InviteComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
    ngOnInit(): void {}
    onApply(form: NgForm) {
        // if (form.invalid) {
        //     return;
        // }
        console.log(form.value);
    }
}
