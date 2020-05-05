import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';

const routes: Routes = [
    {
        path: '',
        children: [ { path: '', component: SeekerDashboardComponent }, { path: '**', redirectTo: '' } ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class SeekerRoutingModule {}
