import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-login-landing',
    templateUrl: './login-landing.component.html',
    styleUrls: [ './login-landing.component.scss' ],
})
export class LoginLandingComponent implements OnInit {
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
