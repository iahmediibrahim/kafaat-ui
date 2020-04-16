import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-registration',
    templateUrl: './user-registration.component.html',
    styleUrls: [ './user-registration.component.scss' ],
})
export class UserRegistrationComponent implements OnInit {
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
        this.router.navigateByUrl('regs/user/details');
    }
}
