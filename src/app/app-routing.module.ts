import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { DemoPageComponent } from './demo-page/demo-page.component';
import { SignInGuard } from './guard/sign-in.guard';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'sign-in',
    component: SignInComponent,
    canActivate: [SignInGuard]
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    canActivate: [SignInGuard]
  },
  {
    path: 'demo-page',
    component: DemoPageComponent,
    canActivate: [SignInGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [SignInGuard]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'user/:username',
    loadChildren: () => import('./user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    redirectTo: '/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
