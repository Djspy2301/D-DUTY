import { Component } from '@angular/core';

@Component({
  selector: 'app-add-staff-p',
  templateUrl: './add-staff-p.component.html',
  styleUrls: ['./add-staff-p.component.css']
})
export class AddStaffPComponent {
  
  constructor() { }

  ngOnInit() { }
  
  register(data:any){
    console.log(data);
  }
}
