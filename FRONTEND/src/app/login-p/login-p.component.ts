import { Component } from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent {
  email=faEnvelope;
  password=faLock;

  constructor(private adminService: AdminService){
  }
  login(data : any){
    // console.warn(data);
    this.adminService.logIn(data);
    
  }
}
