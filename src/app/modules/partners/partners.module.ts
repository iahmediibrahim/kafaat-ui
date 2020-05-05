import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnersRoutingModule } from './partners-routing.module';
import { PartnersComponent } from './partners/partners.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [ PartnersComponent ],
    imports: [ CommonModule, PartnersRoutingModule, SharedModule ],
})
export class PartnersModule {}
