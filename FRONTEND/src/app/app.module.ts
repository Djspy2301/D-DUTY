import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPComponent } from './login-p/login-p.component';
import { HomePComponent } from './home-p/home-p.component';
import { SignUpPComponent } from './sign-up-p/sign-up-p.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
import {HttpClientModule} from '@angular/common/http';
import { ProfilePComponent } from './profile-p/profile-p.component';
import { AddStaffPComponent } from './dashboard/add-staff-p/add-staff-p.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPComponent,
    HomePComponent,
    SignUpPComponent,
    DashboardComponent,
    ProfilePComponent,
    AddStaffPComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
