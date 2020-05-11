import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotificationsComponent } from './notifications.component';

@NgModule({
    declarations: [ NotificationsComponent ],
    imports: [ CommonModule, NotificationsRoutingModule, SharedModule ],
})
export class NotificationsModule {}
