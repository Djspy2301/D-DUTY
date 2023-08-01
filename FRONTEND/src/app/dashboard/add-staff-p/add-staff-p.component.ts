import { Component } from '@angular/core';
import { UserReg } from 'src/app/dataType';
import { SchedulingService } from 'src/app/service/scheduling.service';


@Component({
  selector: 'app-add-staff-p',
  templateUrl: './add-staff-p.component.html',
  styleUrls: ['./add-staff-p.component.css']
})
export class AddStaffPComponent {
  
  constructor(private scheduleService: SchedulingService) { }

  ngOnInit() {
  }
  adminId = this.scheduleService._id
  
  register(data:UserReg){
    
    this.scheduleService.addUser(data);
    console.log(this.adminId);
  }
  
}
