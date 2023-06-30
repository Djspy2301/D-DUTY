import { NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomePComponent } from './home-p/home-p.component';
import { SignUpPComponent } from './sign-up-p/sign-up-p.component';
import { LoginPComponent } from './login-p/login-p.component';
import { faDashboard } from '@fortawesome/free-solid-svg-icons';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: HomePComponent
  },
  {
    path: 'api/v1/tasks/sign-up',
    component: SignUpPComponent
  },
  {
    path: 'api/v1/tasks/log-in',
    component: LoginPComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
