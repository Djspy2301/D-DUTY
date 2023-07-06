import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { LogIn, SignUp } from '../dataType';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  isAdminLoggedIn = new BehaviorSubject<boolean>(false)
  static isAdminLoggedIn: BehaviorSubject<boolean>;
  // private uri = "http://localhost:8000/api/v1/login";
  constructor(private http: HttpClient, private router: Router) {
  }

  userSignUp(data: SignUp){
    this.http
    .post("http://localhost:8000/api/v1/sign-up",data,{observe:'response'})
    .subscribe((result) => {
      this.isAdminLoggedIn.next(true);
      this.router.navigate(["api/v1/log-in"])
      console.warn("resule: ", result);
      console.warn(this.isAdminLoggedIn.value);
    })
  }

  login(data: LogIn):void{
    this.http.post("http://localhost:8000/api/v1/log-in",
    data,
    {observe:"response"}).subscribe((result) => {
      localStorage.setItem('login', JSON.stringify(result.body))
      this.router.navigate(['dashboard'])
      console.log(result);
    }) 
  }
  reloadLogin(){
    if(localStorage.getItem('login')){
     this.isAdminLoggedIn.next(true);
     this.router.navigate(['dashboard']);   
    }
  }

  // logout(){
  //   alert('Your session get expired!')
  //   localStorage.clear();
  //   this.router.navigateByUrl('/login')
  // }

  // dashBoadrd(){
  //   let headers= new HttpHeaders()
  //   .set("Authorization", `bearer ${localStorage.getItem('token')}`)
    

  //   this.http.post("http://localhost:8000/api/v1/tasks/dashboard", {}, {headers}).subscribe((result: object)=>{
  //   })
    
  // }
}
