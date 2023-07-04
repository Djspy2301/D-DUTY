import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { SignUp } from '../dataType';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  // private uri = "http://localhost:8000/api/v1/login";
  constructor(private http: HttpClient, private router: Router) {
  }

  userSignUp(data: SignUp){
    return this.http.post("http://localhost:8000/api/v1/sign-up",data)
  }

  // logIn(data:any){
  //   this.http.get(this.uri, data).subscribe((result: any) => {
  //     localStorage.setItem('token',result.token);
  //     this.router.navigate(["/dashboard"])
  //   })
  //   console.log(data);
  // }

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
