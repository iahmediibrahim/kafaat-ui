import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { OrgRequestComponent } from './company/org-request/org-request.component';
import { RecRequestComponent } from './company/rec-request/rec-request/rec-request.component';
import { RequestsComponent } from './company/rec-request/requests/requests.component';
import { ReqConfirmComponent } from './company/req-confirm/req-confirm.component';

@NgModule({
    declarations: [
        CompanyDashboardComponent,
        OrgRequestComponent,
        RequestsComponent,
        RecRequestComponent,
        ReqConfirmComponent,
    ],
    imports: [ CommonModule, CompanyRoutingModule, SharedModule ],
})
export class CompanyModule {}
