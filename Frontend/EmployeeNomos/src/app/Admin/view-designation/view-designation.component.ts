import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-designation',
  templateUrl: './view-designation.component.html',
  styleUrls: ['./view-designation.component.css']
})
export class ViewDesignationComponent implements OnInit {
readdata:any
  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
this.service.getDesignation().subscribe((res)=>{
  this.readdata=res.data
})
}
Delete(id:any)
{
  this.service.Deletedesign(id).subscribe((res)=>{
    console.log("data deleted")
})
  window.location.reload();
}
  }


