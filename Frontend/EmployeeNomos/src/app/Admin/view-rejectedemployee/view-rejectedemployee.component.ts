import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-rejectedemployee',
  templateUrl: './view-rejectedemployee.component.html',
  styleUrls: ['./view-rejectedemployee.component.css']
})
export class ViewRejectedemployeeComponent implements OnInit {
  redabledata:any
  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getRejectedEmployee().subscribe((res)=>{
      this.redabledata=res.data
    })
  }
  accepted(id:any)
  {
    this.service.AcceptedEmployee(id,'hai').subscribe((res)=>{
      console.log("Accepted")
    })
    window.location.reload();
  }
}
