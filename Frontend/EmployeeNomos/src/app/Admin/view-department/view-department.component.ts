import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit {
  readabledata:any

  constructor(private service:AdminServiceService ) { }

  ngOnInit(): void {
    this.service.getDepartment().subscribe((res)=>{
      this.readabledata=res.data
    })
  }
  Delete(id:any)
{
  this.service.Deletedept(id).subscribe((res)=>{
    console.log("data deleted")
})
  window.location.reload();
}

}
