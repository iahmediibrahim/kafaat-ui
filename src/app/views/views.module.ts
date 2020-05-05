import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';

import { SharedModule } from '../shared/shared.module';

import { FaqsComponent } from './pages/subscriptions/faqs/faqs.component';
import { SubscripeComponent } from './pages/subscriptions/subscripe/subscripe.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions/subscriptions.component';
import { ViewsRoutingModule } from './views-routing.module';
@NgModule({
    declarations: [ SubscriptionsComponent, FaqsComponent, SubscripeComponent ],
    imports: [ CommonModule, ViewsRoutingModule, SharedModule, CarouselModule.forRoot() ],
})
export class ViewsModule {}
