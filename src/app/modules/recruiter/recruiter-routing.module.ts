import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { RegistrationRequestsComponent } from './recruiter/registration-requests/registration-requests/registration-requests.component';
import { RecommendationRequestComponent } from './recruiter/recommendation-request/recommendation-request/recommendation-request.component';
import { ReviewRequestComponent } from './recruiter/registration-requests/review-request/review-request.component';
import { SeekerReviewComponent } from './recruiter/registration-requests/seeker-review/seeker-review.component';
import { JobDescriptionComponent } from './recruiter/job-description/job-description/job-description.component';
import { AddJobDescriptionComponent } from './recruiter/job-description/add-job-description/add-job-description.component';
import { HrReviewRequestComponent } from './recruiter/eligibility-evaluation/modules/recruiter/recruiter/hr-review-request/hr-review-request/hr-review-request.component';
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
			{ path: 'hr-add-new-job-description', component: AddJobDescriptionComponent },
			{ path: '**', redirectTo: '' }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class RecruiterRoutingModule {}
