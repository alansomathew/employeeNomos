import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-viewnewemployee',
  templateUrl: './viewnewemployee.component.html',
  styleUrls: ['./viewnewemployee.component.css']
})
export class ViewnewemployeeComponent implements OnInit {
  redabledata:any

  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getnewemployee().subscribe((res)=>{
      this.redabledata=res.data
    })
  }
  Accept(id:any)
  {
    this.service.AcceptEmployee(id,"Hai").subscribe((res)=>{
      console.log("Accpted")
    })
    window.location.reload();
  }
  Reject(id:any)
  {
    this.service.RejectEmployee(id,"Hai").subscribe((res)=>{
      console.log("Rejected")
    })
    window.location.reload();
  }
  
}
