import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomePComponent } from './home-p/home-p.component';
import { SignUpPComponent } from './sign-up-p/sign-up-p.component';
import { LoginPComponent } from './login-p/login-p.component';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { ProfilePComponent } from './profile-p/profile-p.component';


const routes: Routes = [
  {
    path: '',
    component: HomePComponent
  },
  {
    path: 'api/v1/sign-up',
    component: SignUpPComponent
  },
  {
    path: 'api/v1/log-in',
    component: LoginPComponent,
    canActivate: [authGuard]
  },
  {
    path: 'profile',
    component: ProfilePComponent,
    canActivate: [authGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
