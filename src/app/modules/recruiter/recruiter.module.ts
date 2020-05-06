import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RecruiterRoutingModule } from './recruiter-routing.module';
import { JobDescriptionComponent } from './recruiter/job-description/job-description/job-description.component';
import { AccReqComponent } from './recruiter/modals/acc-req/acc-req.component';
import { JobDescriptionConfirmComponent } from './recruiter/modals/job-description-confirm/job-description-confirm.component';
import { RejectRequestComponent } from './recruiter/modals/reject-request/reject-request.component';
import { ViewJobDescriptionComponent } from './recruiter/modals/view-job-description/view-job-description.component';
import { RecommendationRequestComponent } from './recruiter/recommendation-request/recommendation-request/recommendation-request.component';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { RegistrationRequestsComponent } from './recruiter/registration-requests/registration-requests/registration-requests.component';
import { ReviewRequestComponent } from './recruiter/registration-requests/review-request/review-request.component';
import { SeekerReviewComponent } from './recruiter/registration-requests/seeker-review/seeker-review.component';
import { HrReviewRequestComponent } from './recruiter/eligibility-evaluation/hr-review-request/hr-review-request.component';
import { HrRequestRecomendationComponent } from './recruiter/eligibility-evaluation/hr-request-recomendation/hr-request-recomendation/hr-request-recomendation.component';
import { RequestProblemComponent } from './recruiter/eligibility-evaluation/request-problem/request-problem/request-problem.component';
import { SearchRecomendedComponent } from './recruiter/eligibility-evaluation/search-recomended/search-recomended/search-recomended.component';
import { SeekerDescriptionMessageComponent } from './recruiter/eligibility-evaluation/seeker-description-message/seeker-description-message/seeker-description-message.component';

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
    ],
    imports: [ CommonModule, RecruiterRoutingModule, SharedModule ],
})
export class RecruiterModule {}
