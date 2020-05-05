import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SubscripeComponent } from './pages/subscriptions/subscripe/subscripe.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions/subscriptions.component';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: 'subscriptions', component: SubscriptionsComponent },
            { path: 'subscripe', component: SubscripeComponent },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ViewsRoutingModule {}
