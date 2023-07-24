import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes, mapToCanActivate } from '@angular/router';
import { HomePComponent } from './home-p/home-p.component';
import { SignUpPComponent } from './sign-up-p/sign-up-p.component';
import { LoginPComponent } from './login-p/login-p.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { ProfilePComponent } from './profile-p/profile-p.component';
import { AddStaffPComponent } from './dashboard/add-staff-p/add-staff-p.component';
import { StaffsPComponent } from './dashboard/staffs-p/staffs-p.component';


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
    path: 'api/v1/dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'api/v1/dashboard/add-staff',
    component: AddStaffPComponent
  },
  {
    path: 'api/v1/dashboard/staff',
    component: StaffsPComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
