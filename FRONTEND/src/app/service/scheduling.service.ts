import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserReg } from '../dataType';
import { AdminService } from './admin.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient, private adminService: AdminService) { }
  //host _id:
  _id = this.adminService._id;
  //User Registration by admin
  addUser(data: UserReg){
    this.http
    .post("http://localhost:8000/api/v1/dashboard/add-staff", data).subscribe((result:any)=>{
      console.warn(result);
    })
  }

  //Staff List
  uri = 'https://jsonplaceholder.typicode.com/users';

  staff(){
    return this.http
    .get<User[]>('http://localhost:8000/api/v1/dashboard/staff')
  }
}
