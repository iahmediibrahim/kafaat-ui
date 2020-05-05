import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeekerRoutingModule } from './seeker-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';

@NgModule({
    declarations: [ SeekerDashboardComponent ],
    imports: [ CommonModule, SeekerRoutingModule, SharedModule ],
})
export class SeekerModule {}
