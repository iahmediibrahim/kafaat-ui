import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { RegistrationLandingComponent } from './registration-landing/registration-landing.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { RecruiterRegistrationComponent } from './recruiter-registration/recruiter-registration.component';
import { CompanyRegistrationComponent } from './company-registration/company-registration.component';
import { SharedModule } from '../shared/shared.module';
import { UserRegsDetailsComponent } from './user-registration/user-regs-details/user-regs-details.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { RecruiterRegsDetailsComponent } from './recruiter-registration/recruiter-regs-details/recruiter-regs-details.component';
import { CompanyRegsDetailsComponent } from './company-registration/company-regs-details/company-regs-details.component';
import { ActivationModalComponent } from './activation-modal/activation-modal.component';
import { CompletionComponent } from './completion/completion.component';

@NgModule({
    declarations: [
        TestemonialsComponent,
        RegistrationLandingComponent,
        UserRegistrationComponent,
        RecruiterRegistrationComponent,
        CompanyRegistrationComponent,
        UserRegsDetailsComponent,
        RecruiterRegsDetailsComponent,
        CompanyRegsDetailsComponent,
        ActivationModalComponent,
        CompletionComponent,
    ],
    imports: [ CommonModule, SignUpRoutingModule, SharedModule, NgxIntlTelInputModule ],
})
export class SignUpModule {}
