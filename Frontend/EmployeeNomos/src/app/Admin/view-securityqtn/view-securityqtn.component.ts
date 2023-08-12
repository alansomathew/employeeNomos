import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';


@Component({
  selector: 'app-view-securityqtn',
  templateUrl: './view-securityqtn.component.html',
  styleUrls: ['./view-securityqtn.component.css']
})
export class ViewSecurityqtnComponent implements OnInit {
  readdata:any

  constructor(private service:AdminServiceService) { }

  ngOnInit(): void {
    this.service.getsecurity().subscribe((res)=>{
      this.readdata=res.data
  })

}
  Delete(id:any)
  {
    this.service.Deletesecurity(id).subscribe((res)=>{
      console.log("data deleted")
    });
    window.location.reload();
  }

}
