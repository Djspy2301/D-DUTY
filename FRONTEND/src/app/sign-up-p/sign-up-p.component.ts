import { Component } from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import { AdminService } from '../service/admin.service';
import { Router } from '@angular/router';
import { SignUp } from '../dataType';

@Component({
  selector: 'app-sign-up-p',
  templateUrl: './sign-up-p.component.html',
  styleUrls: ['./sign-up-p.component.css']
})
export class SignUpPComponent {
  constructor(private signup: AdminService, private router: Router){}
  email=faEnvelope;
  password=faLock;
  
  signUp(data: SignUp):void{
    this.signup.adminSignUp(data)
  }
}
