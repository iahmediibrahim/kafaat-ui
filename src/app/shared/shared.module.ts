import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [ NavComponent, FooterComponent ],
    imports: [ CommonModule, RouterModule, FormsModule, NgbModule ],
    exports: [ NavComponent, FooterComponent, NgbModule, FormsModule ],
})
export class SharedModule {}
