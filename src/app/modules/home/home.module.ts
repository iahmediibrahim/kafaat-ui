import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ LandingComponent ],
    imports: [ CommonModule, HomeRoutingModule, SharedModule ],
})
export class HomeModule {}
