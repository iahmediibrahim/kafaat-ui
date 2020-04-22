import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './pages/landing/landing.component';
import { ViewsRoutingModule } from './views-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
    declarations: [ LandingComponent ],
    imports: [ CommonModule, ViewsRoutingModule, SharedModule, CarouselModule.forRoot() ],
})
export class ViewsModule {}
