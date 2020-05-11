import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyDashboardComponent } from './company-dashboard/company-dashboard.component';
import { OrgRequestComponent } from './org-request/org-request.component';
import { RecRequestComponent } from './rec-request/rec-request/rec-request.component';
import { RequestsComponent } from './rec-request/requests/requests.component';

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
