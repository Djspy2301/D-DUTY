import { Component } from '@angular/core'; 
import { ActivatedRoute } from '@angular/router';
import { SchedulingService } from '../service/scheduling.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  parameterValue : string = 'id';
  id:string=this.scheduleService._id;
  constructor(private route: ActivatedRoute, 
    private scheduleService: SchedulingService){
      
  }

  ngOnInit(): void{
    
    // console.warn(this.id)
    // this.parameterValue = this.route.snapshot.paramMap.get(this.id) || '';
    // console.log('Parameter Value:', this.parameterValue);
  }
}
