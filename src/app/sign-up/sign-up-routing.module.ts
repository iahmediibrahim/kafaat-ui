import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationLandingComponent } from './registration-landing/registration-landing.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { UserRegsDetailsComponent } from './user-registration/user-regs-details/user-regs-details.component';
import { RecruiterRegsDetailsComponent } from './recruiter-registration/recruiter-regs-details/recruiter-regs-details.component';
import { CompanyRegsDetailsComponent } from './company-registration/company-regs-details/company-regs-details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: RegistrationLandingComponent },

            { path: 'user', component: UserRegistrationComponent },
            { path: 'user/details', component: UserRegsDetailsComponent },

            { path: 'company', component: CompanyRegistrationComponent },
            { path: 'company/details', component: CompanyRegsDetailsComponent },

            { path: 'recruiter', component: RecruiterRegistrationComponent },
            { path: 'recruiter/details', component: RecruiterRegsDetailsComponent },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class SignUpRoutingModule {}
