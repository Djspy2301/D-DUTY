import { Component } from '@angular/core';
import { AdminService } from '../service/admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private adminService: AdminService){

  }

  ngOnInit(){
    this.adminService.dashBoadrd()
  }
}
