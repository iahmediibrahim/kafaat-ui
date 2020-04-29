import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TestemonialsComponent } from './testemonials/testemonials.component';
import { InviteComponent } from './invite/invite.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
    declarations: [ NavComponent, FooterComponent, TestemonialsComponent, InviteComponent, TopNavComponent ],
    imports: [ CommonModule, RouterModule, FormsModule, NgbModule ],
    exports: [ NavComponent, FooterComponent, NgbModule, FormsModule, TestemonialsComponent, TopNavComponent ],
})
export class SharedModule {}
