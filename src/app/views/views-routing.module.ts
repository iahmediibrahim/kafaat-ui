import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { SeekerDashboardComponent } from './seeker/seeker-dashboard/seeker-dashboard.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { MediaComponent } from './pages/media/media.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { RecruiterDashboardComponent } from './recruiter/recruiter-dashboard/recruiter-dashboard.component';
import { CompanyDashboardComponent } from './company/company-dashboard/company-dashboard.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { SubscriptionsComponent } from './pages/subscriptions/subscriptions/subscriptions.component';
import { RegistrationRequestsComponent } from './recruiter/registration-requests/registration-requests.component';
import { ReviewRequestComponent } from './recruiter/review-request/review-request.component';
import { SubscripeComponent } from './pages/subscriptions/subscripe/subscripe.component';
import { RecRequestComponent } from './company/rec-request/rec-request.component';

const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: LandingComponent },
			{ path: 'about', component: AboutComponent },
			{ path: 'our-services', component: OurServicesComponent },
			{ path: 'media', component: MediaComponent },
			{ path: 'partners', component: PartnersComponent },
			{ path: 'contact-us', component: ContactComponent },
			{ path: 'seeker-dashboard', component: SeekerDashboardComponent },
			{ path: 'recruiter-dashboard', component: RecruiterDashboardComponent },
			{ path: 'recruiter-regs-req', component: RegistrationRequestsComponent },
			{ path: 'company-dashboard', component: CompanyDashboardComponent },
			{ path: 'rec-request', component: RecRequestComponent },
			{ path: 'review-request', component: ReviewRequestComponent },
			{ path: 'notifications', component: NotificationsComponent },
			{ path: 'subscriptions', component: SubscriptionsComponent },
			{ path: 'subscripe', component: SubscripeComponent },
			{ path: 'subscriptions', component: SubscriptionsComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class ViewsRoutingModule {}
