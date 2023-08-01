import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User, UserReg } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class SchedulingService {

  constructor(private http: HttpClient) { }

  //Getting _id of host to create corresponding host's user
  adminId =JSON.parse(localStorage.getItem('login') ?? '{}');
  _id= this.adminId['_id'];

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
