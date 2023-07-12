import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-add-staff-p',
  templateUrl: './add-staff-p.component.html',
  styleUrls: ['./add-staff-p.component.css']
})
export class AddStaffPComponent {
  
  constructor(private adminService: AdminService) { }

  ngOnInit() { }
  
  register(data:any){
    
    this.adminService.addUser(data);
  }
}
