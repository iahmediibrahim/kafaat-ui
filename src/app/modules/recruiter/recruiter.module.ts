import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests/registration-requests.component';
import { RecommendationRequestComponent } from './recommendation-request/recommendation-request/recommendation-request.component';
import { ReviewRequestComponent } from './registration-requests/review-request/review-request.component';
import { SeekerReviewComponent } from './registration-requests/seeker-review/seeker-review.component';
import { JobDescriptionComponent } from './job-description/job-description/job-description.component';
import { AccReqComponent } from './modals/acc-req/acc-req.component';
import { JobDescriptionConfirmComponent } from './modals/job-description-confirm/job-description-confirm.component';
import { RejectRequestComponent } from './modals/reject-request/reject-request.component';
import { ViewJobDescriptionComponent } from './modals/view-job-description/view-job-description.component';
import { HrReviewRequestComponent } from './eligibility-evaluation/hr-review-request/hr-review-request.component';
import { HrRequestRecomendationComponent } from './recommendation-request/hr-request-recomendation/hr-request-recomendation.component';
import { RequestProblemComponent } from './modals/request-problem/request-problem.component';
import { SearchRecomendedComponent } from './recommendation-request/search-recomended/search-recomended.component';
import { SeekerDescriptionMessageComponent } from './modals/seeker-description-message/seeker-description-message.component';
import { ReqMeetupComponent } from './modals/req-meetup/req-meetup.component';
import { SeekerRequestEvaluationComponent } from './eligibility-evaluation/seeker-request-evaluation/seeker-request-evaluation.component';
import { DoneMessageComponent } from './modals/done-message/done-message.component';

@NgModule({
    declarations: [
        RecruiterDashboardComponent,
        RegistrationRequestsComponent,
        RecommendationRequestComponent,
        ReviewRequestComponent,
        SeekerReviewComponent,
        JobDescriptionComponent,
        AccReqComponent,
        JobDescriptionConfirmComponent,
        RejectRequestComponent,
        ViewJobDescriptionComponent,
        HrReviewRequestComponent,
        HrRequestRecomendationComponent,
        RequestProblemComponent,
        SearchRecomendedComponent,
        SeekerDescriptionMessageComponent,
        RequestProblemComponent,
        SearchRecomendedComponent,
        SeekerDescriptionMessageComponent,
        ReqMeetupComponent,
        SeekerRequestEvaluationComponent,
        DoneMessageComponent,
    ],
    imports: [ CommonModule, RecruiterRoutingModule, SharedModule ],
})
export class RecruiterModule {}
