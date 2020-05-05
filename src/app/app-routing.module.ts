import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
    },
    {
        path: 'about',
        loadChildren: () => import('./modules/about/about.module').then((m) => m.AboutModule),
    },
    {
        path: 'contact',
        loadChildren: () => import('./modules/contact/contact.module').then((m) => m.ContactModule),
    },
    {
        path: 'media',
        loadChildren: () => import('./modules/media/media.module').then((m) => m.MediaModule),
    },
    {
        path: 'notifications',
        loadChildren: () => import('./modules/notifications/notifications.module').then((m) => m.NotificationsModule),
    },
    {
        path: 'partners',
        loadChildren: () => import('./modules/partners/partners.module').then((m) => m.PartnersModule),
    },
    {
        path: 'our-services',
        loadChildren: () => import('./modules/our-services/our-services.module').then((m) => m.OurServicesModule),
    },
    {
        path: 'company',
        loadChildren: () => import('./modules/company/company.module').then((m) => m.CompanyModule),
    },
    {
        path: 'recruiter',
        loadChildren: () => import('./modules/recruiter/recruiter.module').then((m) => m.RecruiterModule),
    },
    {
        path: 'seeker',
        loadChildren: () => import('./modules/seeker/seeker.module').then((m) => m.SeekerModule),
    },
    {
        path: 'views',
        loadChildren: () => import('./views/views.module').then((m) => m.ViewsModule),
    },
    {
        path: 'regs',
        loadChildren: () => import('./modules/sign-up/sign-up.module').then((m) => m.SignUpModule),
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [ RouterModule, RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
    providers: [],
})
export class AppRoutingModule {}
