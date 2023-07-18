import { Component } from '@angular/core';
import { UserReg } from 'src/app/dataType';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-staff-p',
  templateUrl: './add-staff-p.component.html',
  styleUrls: ['./add-staff-p.component.css']
})
export class AddStaffPComponent {
  
  constructor(private adminService: AdminService) { }

  ngOnInit() {
  }
  adminId = this.adminService._id
  
  register(data:UserReg){
    
    this.adminService.addUser(data);
    console.log(this.adminId);
  }
  
}
