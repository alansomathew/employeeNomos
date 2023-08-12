import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-projectheadregistration',
  templateUrl: './view-projectheadregistration.component.html',
  styleUrls: ['./view-projectheadregistration.component.css']
})
export class ViewProjectheadregistrationComponent implements OnInit {
  readabledata:any

  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getprojecthead().subscribe((res)=>{
      this.readabledata=res.data
    })
  }
  Delete(id:any)
  {
    this.service.Deleteprojecthead(id).subscribe((res)=>{
      console.log("Data Deleted")
    })
    window.location.reload();
  }
}
