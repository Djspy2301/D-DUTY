import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-profile-p',
  templateUrl: './profile-p.component.html',
  styleUrls: ['./profile-p.component.css']
})
export class ProfilePComponent {
  constructor(private adminService: AdminService){}

  ngOnInit(){
    this.adminService.reloadProfile();
  }
}
