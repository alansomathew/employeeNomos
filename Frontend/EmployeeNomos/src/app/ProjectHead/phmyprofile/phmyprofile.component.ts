import { Component, OnInit } from '@angular/core';
import { ProjectheadServiceService } from '../projecthead-service.service';

@Component({
  selector: 'app-phmyprofile',
  templateUrl: './phmyprofile.component.html',
  styleUrls: ['./phmyprofile.component.css']
})
export class PhmyprofileComponent implements OnInit {
  readdata:any
  name:any
  email:any
  contact:any
  DOB:any
  gender:any
  constructor(private service:ProjectheadServiceService) { }

  ngOnInit(): void {
    this.service.getMydata(sessionStorage.getItem("pid")).subscribe((res)=>{
     this.readdata= res.data
     console.log(res.data)
     this.name=res.data[0].ph_name
     this.email=res.data[0].ph_email
     this.contact=res.data[0].ph_contact
     this.DOB=res.data[0].ph_dob
     this.gender=res.data[0].ph_gender
   })
  }

}
