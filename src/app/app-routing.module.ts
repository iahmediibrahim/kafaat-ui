import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
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
