import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private route: Router){}
  menuType: string = 'default';
  profileName: string = '';
  
  ngOnInit(): void{
    this.route.events.subscribe((val: any) => {
      
      if(val.url){
        console.warn(val.url);
        if(localStorage.getItem('login') && val.url.includes('dashboard')){
          console.warn('in login area')
          this.menuType = 'admin';
          if(localStorage.getItem('login')){
            let nameStore = localStorage.getItem('login');
            let nameData = nameStore && JSON.parse(nameStore);
            this.profileName=nameData.user;
            console.log(this.profileName);
          }
        }else{
          console.warn('outside login')
          this.menuType = 'default';
        }
      }
    })
  }
  logOut(){
    localStorage.removeItem('login');
    this.route.navigate(['/']);
  }
}
