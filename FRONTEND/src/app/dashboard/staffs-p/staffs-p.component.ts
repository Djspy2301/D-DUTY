import { Component } from '@angular/core';
import { User } from 'src/app/dataType';
import { AdminService } from 'src/app/service/admin.service';

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
  constructor(private adminService: AdminService){}
  
  ngOnInit():void{
    this.getStaffList();
  }

  getStaffList(){
    this.adminService.staff().subscribe((response)=>{
      console.log(response)
      this.users$ = response;
     }
  )};
}
