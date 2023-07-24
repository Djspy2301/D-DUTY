import { Component } from '@angular/core';
import { AdminService } from 'src/app/service/admin.service';

@Component({
  selector: 'app-staffs-p',
  templateUrl: './staffs-p.component.html',
  styleUrls: ['./staffs-p.component.css']
})
export class StaffsPComponent {
  constructor(private adminService: AdminService){}
  ngOnInit(){
   this.adminService.staff();
   console.warn() 
  }
}
