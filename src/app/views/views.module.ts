import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SharedModule } from '../shared/shared.module';
import { ContactComponent } from './pages/contact/contact.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MediaComponent } from './pages/media/media.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { ViewsRoutingModule } from './views-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions/subscriptions.component';
import { RegistrationRequestsComponent } from './recruiter/registration-requests/registration-requests.component';
import { FaqsComponent } from './pages/subscriptions/faqs/faqs.component';
import { SubscripeComponent } from './pages/subscriptions/subscripe/subscripe.component';
import { RecRequestComponent } from './company/rec-request/rec-request.component';
import { ReviewRequestComponent } from './recruiter/review-request/review-request.component';
import { AccReqComponent } from './recruiter/acc-request/acc-req/acc-req.component';
import { RejectRequestComponent } from './recruiter/reject-request/reject-request.component';
import { JobDescriptionComponent } from './recruiter/job-description/job-description.component';
import { ViewJobDescriptionComponent } from './recruiter/view-job-description/view-job-description.component';
import { SeekerReviewComponent } from './seeker/seeker-review/seeker-review.component';
import { RequestsComponent } from './company/requests/requests.component';
import { OrgRequestComponent } from './company/org-request/org-request.component';
import { ReqConfirmComponent } from './company/req-confirm/req-confirm.component';
import { RecommendationRequestComponent } from './recruiter/recommendation-request/recommendation-request/recommendation-request.component';
@NgModule({
    declarations: [
        LandingComponent,
        SeekerDashboardComponent,
        OurServicesComponent,
        MediaComponent,
        PartnersComponent,
        ContactComponent,
        AboutComponent,
        NotificationsComponent,
        CompanyDashboardComponent,
        RecruiterDashboardComponent,
        SubscriptionsComponent,
        RegistrationRequestsComponent,
        ReviewRequestComponent,
        FaqsComponent,
        SubscripeComponent,
        RecRequestComponent,
        RequestsComponent,
        OrgRequestComponent,
        ReqConfirmComponent,
        RecommendationRequestComponent,
        SeekerReviewComponent,
        ViewJobDescriptionComponent,
        JobDescriptionComponent,
        RejectRequestComponent,
        AccReqComponent,
    ],
    imports: [ CommonModule, ViewsRoutingModule, SharedModule, CarouselModule.forRoot() ],
})
export class ViewsModule {}
