import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../shared/shared.module';

import { LoginLandingComponent } from './login-landing/login-landing.component';

@NgModule({
    declarations: [ LoginLandingComponent ],
    imports: [ CommonModule, AuthRoutingModule, SharedModule ],
})
export class AuthModule {}
