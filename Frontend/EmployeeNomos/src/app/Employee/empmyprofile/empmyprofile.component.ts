import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-empmyprofile',
  templateUrl: './empmyprofile.component.html',
  styleUrls: ['./empmyprofile.component.css']
})
export class EmpmyprofileComponent implements OnInit {

readdata:any
name:any
email:any
contact:any
DOB:any
gender:any

  constructor(private service:EmpServiceService) { }

  ngOnInit(): void {
    this.service.getMydata(sessionStorage.getItem("cid")).subscribe((res)=>{
    this.readdata=res.data
    console.log(res.data)
    this.name=res.data[0].emp_name
    this.email=res.data[0].emp_email
    this.contact=res.data[0].emp_contact
    this.DOB=res.data[0].emp_dob
    this.gender=res.data[0].emp_gender
    
  })
    
}

}
