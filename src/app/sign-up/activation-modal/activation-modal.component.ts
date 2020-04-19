import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-activation-modal',
    templateUrl: './activation-modal.component.html',
    styleUrls: [ './activation-modal.component.scss' ],
})
export class ActivationModalComponent implements OnInit {
    @Input() name;

    constructor(public activeModal: NgbActiveModal, private router: Router) {}
    ngOnInit(): void {}
    onApply(form: NgForm) {
        // if (form.invalid) {
        //     return;
        // }
        console.log(form.value);
        this.router.navigateByUrl('regs/company/details');
    }
}
