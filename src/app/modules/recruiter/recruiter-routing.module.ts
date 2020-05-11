import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterDashboardComponent } from './recruiter-dashboard/recruiter-dashboard.component';
import { RegistrationRequestsComponent } from './registration-requests/registration-requests/registration-requests.component';
import { RecommendationRequestComponent } from './recommendation-request/recommendation-request/recommendation-request.component';
import { ReviewRequestComponent } from './registration-requests/review-request/review-request.component';
import { SeekerReviewComponent } from './registration-requests/seeker-review/seeker-review.component';
import { JobDescriptionComponent } from './job-description/job-description/job-description.component';
import { HrReviewRequestComponent } from './eligibility-evaluation/hr-review-request/hr-review-request.component';
import { HrRequestRecomendationComponent } from './recommendation-request/hr-request-recomendation/hr-request-recomendation.component';
import { SearchRecomendedComponent } from './recommendation-request/search-recomended/search-recomended.component';
import { AddJobDescriptionComponent } from './job-description/add-job-description/add-job-description.component';
import { HrEvaluationComponent } from './eligibility-evaluation/hr-evaluation/hr-evaluation.component';
import { SeekerRequestEvaluationComponent } from './eligibility-evaluation/seeker-request-evaluation/seeker-request-evaluation.component';
const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: RecruiterDashboardComponent },
            { path: 'regs-req', component: RegistrationRequestsComponent },
            { path: 'recommendation-req', component: RecommendationRequestComponent },
            { path: 'review-request', component: ReviewRequestComponent },
            { path: 'seeker-review', component: SeekerReviewComponent },
            { path: 'job-description', component: JobDescriptionComponent },
            { path: 'hr-review-request', component: HrReviewRequestComponent },
            { path: 'hr-request-recomendation', component: HrRequestRecomendationComponent },
            { path: 'hr-search-recomended', component: SearchRecomendedComponent },
            { path: 'hr-add-new-job-description', component: AddJobDescriptionComponent },
            { path: 'hr-evaluationt', component: HrEvaluationComponent },
            { path: 'seeker-evaluation-request', component: SeekerRequestEvaluationComponent },
            { path: '**', redirectTo: '' },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class RecruiterRoutingModule {}
