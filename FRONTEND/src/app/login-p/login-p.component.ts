import { Component } from '@angular/core';
import {faEnvelope, faLock} from '@fortawesome/free-solid-svg-icons'
import { AdminService } from '../service/admin.service';
import {Router} from '@angular/router'
import { LogIn } from '../dataType';

@Component({
  selector: 'app-login-p',
  templateUrl: './login-p.component.html',
  styleUrls: ['./login-p.component.css']
})
export class LoginPComponent {
  email=faEnvelope;
  password=faLock;

  constructor(private adminService: AdminService, private router:Router){}

  ngOnInit(){
    this.adminService.reloadLogin();
  }
  
  login(data : LogIn){
    this.adminService.login(data);
  }

  
}
