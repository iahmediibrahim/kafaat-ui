import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-recruiter-registration',
    templateUrl: './recruiter-registration.component.html',
    styleUrls: [ './recruiter-registration.component.scss' ],
})
export class RecruiterRegistrationComponent implements OnInit {
    constructor(private router: Router) {}

    passwordType = 'password';
    passwordShown = false;
    ngOnInit(): void {}
    togglePassword() {
        if (this.passwordShown) {
            this.passwordType = 'password';
            this.passwordShown = false;
        } else {
            this.passwordType = 'text';
            this.passwordShown = true;
        }
    }
    onApply(form: NgForm) {
        // if (form.invalid) {
        //     return;
        // }
        console.log(form.value);
        this.router.navigateByUrl('regs/recruiter/details');
    }
}
