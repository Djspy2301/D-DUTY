import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { LogIn, SignUp, UserReg } from '../dataType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  //Getting _id of host to create corresponding host's user
  adminId =JSON.parse(localStorage.getItem('login') ?? '{}');
  _id= this.adminId['_id'];
  
  //--------------------------------------------------------
  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  static isAdminLoggedIn: BehaviorSubject<boolean>;
  constructor(private http: HttpClient, private router: Router) {
  }
// admin registration
  adminSignUp(data: SignUp){
    this.http
    .post("http://localhost:8000/api/v1/sign-up",data,{observe:'response'})
    .subscribe((result) => {
      this.isAdminLoggedIn.next(true);
      this.router.navigate(["api/v1/log-in"])
      console.warn("resule: ", result);
      console.warn(this.isAdminLoggedIn.value);
    })
  }
//User Registration by admin
  addUser(data: UserReg){
    this.http
    .post("http://localhost:8000/api/v1/dashboard/add-staff", data).subscribe((result:any)=>{
      console.warn(result);
    })
  }
//login
  login(data: LogIn):void{
    this.http.post("http://localhost:8000/api/v1/log-in",
    data,
    {observe:"response"}).subscribe((result) => {
      localStorage.setItem('login', JSON.stringify(result.body))
      this.router.navigate(['api/v1/dashboard'])
      window.location.reload();
      console.log(result);
    }) 
  }
  // If logged in reload page
  reloadLogin(){
    if(localStorage.getItem('login')){
     this.isAdminLoggedIn.next(true);
     this.router.navigate(['api/v1/dashboard']); 
    }
  }
  //If logged in Profile page
  reloadProfile(){
    if(localStorage.getItem('login')){
      this.isAdminLoggedIn.next(true);
      this.router.navigate(['profile'])
      
    }
  }

  //Staff List
  staff(){
    this.http.get('http://localhost:8000/api/v1/dashboard/staff')
    .subscribe((result)=>{
      console.warn(result);
    })
  }
 
}
