import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-acceptedemployee',
  templateUrl: './view-acceptedemployee.component.html',
  styleUrls: ['./view-acceptedemployee.component.css']
})
export class ViewAcceptedemployeeComponent implements OnInit {
  redabledata:any

  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getemployee().subscribe((res)=>{
      this.redabledata=res.data
    })
  }
  rejected(id:any)
  {
    this.service.RejectedEmployee(id,"hai").subscribe((res)=>{
      console.log("Rejected")
    })
    window.location.reload();
  }

}
