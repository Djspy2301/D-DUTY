import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/dataType';
import { SchedulingService } from 'src/app/service/scheduling.service';


@Component({
  selector: 'app-staffs-p',
  templateUrl: './staffs-p.component.html',
  styleUrls: ['./staffs-p.component.css']
})
export class StaffsPComponent {
  // users:any;
  // constructor(private adminService: AdminService){
  //   this.adminService.staff().subscribe((data:any)=>{
  //     this.users=data.data;
  //     console.log(data)
  //     console.log(this.users);
  //    });

  // }
  // dummyArray = [
  //   {
  //     name: "John Doe",
  //     age: 30,
  //     job: "Software Engineer",
  //   },
  //   {
  //     name: "Jane Doe",
  //     age: 25,
  //     job: "Teacher",
  //   },
  //   {
  //     name: "Mary Smith",
  //     age: 40,
  //     job: "Doctor",
  //   },
  // ];



  users$:undefined|User[];
  // storedId=this.sheduleService._id;
  // parameterValue: string ='';

  constructor(private scheduleService: SchedulingService,
    private sheduleService:SchedulingService,
    private route: ActivatedRoute){
      // this.parameterValue=this.route.snapshot.paramMap.get(this.storedId) as string
    }
  
  ngOnInit():void{
    // this.parameterValue=this.route.snapshot.paramMap.get(this.storedId) || ''
    // console.log(this.parameterValue)
    this.getStaffList();
  }

  getStaffList(){
    this.scheduleService.staff().subscribe((response)=>{
      console.log(response)
      this.users$ = response;
     }
  )};
}
