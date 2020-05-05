import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { OrgRequestComponent } from './company/org-request/org-request.component';
import { RecRequestComponent } from './company/rec-request/rec-request/rec-request.component';
import { RequestsComponent } from './company/rec-request/requests/requests.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: CompanyDashboardComponent },
            { path: 'org-request', component: OrgRequestComponent },
            { path: 'rec-request', component: RecRequestComponent },
            { path: 'requests', component: RequestsComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class CompanyRoutingModule {}
