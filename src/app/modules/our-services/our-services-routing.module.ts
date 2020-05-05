import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OurServicesComponent } from './our-services/our-services.component';

const routes: Routes = [
    {
        path: '',
        children: [ { path: '', component: OurServicesComponent } ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class OurServicesRoutingModule {}
