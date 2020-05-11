import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-registration-requests',
    templateUrl: './registration-requests.component.html',
    styleUrls: [ './registration-requests.component.scss' ],
})
export class RegistrationRequestsComponent implements OnInit {
    constructor() {}
    onApply(form: NgForm) {
        // if (form.invalid) {
        //     return;
        // }
        console.log(form.value);
    }
    ngOnInit(): void {}
}
