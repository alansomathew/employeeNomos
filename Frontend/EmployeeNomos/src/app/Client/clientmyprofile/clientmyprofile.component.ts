import { Component, OnInit } from '@angular/core';
import { ClientServieService } from '../client-servie.service';


@Component({
  selector: 'app-clientmyprofile',
  templateUrl: './clientmyprofile.component.html',
  styleUrls: ['./clientmyprofile.component.css']
})
export class ClientmyprofileComponent implements OnInit {
readdata:any
name:any
email:any
contact:any
DOB:any
gender:any
  constructor(private service:ClientServieService) { }



  ngOnInit(): void {
    this.service.getMydata(sessionStorage.getItem("cid")).subscribe((res)=>{
      this.readdata=res.data
      this.name=res.data[0].client_name
      this.email=res.data[0].client_email
      this.contact=res.data[0].client_contact
      this.DOB=res.data[0].client_dob
      this.gender=res.data[0].client_gender
    


    })
    
  }

}
