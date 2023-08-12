import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectheadServiceService } from '../projecthead-service.service';

@Component({
  selector: 'app-phchangepassword',
  templateUrl: './phchangepassword.component.html',
  styleUrls: ['./phchangepassword.component.css']
})
export class PhchangepasswordComponent implements OnInit {
  readdata:any
  readdata1:any
  password:any
 

  constructor(private service:ProjectheadServiceService) { }

  ngOnInit(): void {
    this.service.getMydata(sessionStorage.getItem("pid")).subscribe((res)=>{
      this.readdata=res.data
      this.password=res.data[0].ph_password
      console.log(res.data)
    })
  }
  changepasswordform=new FormGroup({
    'oldpassword':new FormControl('',Validators.required),
    'newpassword':new FormControl('',Validators.required),
    'confirmnewpassword':new FormControl('',Validators.required)
  })
  getpassword(e:any)
  {
   
      if(this.password != e.target.value)
      {
        alert("invalid")
      }
  }
  
  Changepassword()
  {
    if(this.changepasswordform.value.newpassword != this.changepasswordform.value.confirmnewpassword)
    {
      alert("check password")
    }
    else
    {
      this.service.updatepassword(sessionStorage.getItem("pid"),this.changepasswordform.value).subscribe((res)=>{
        console.log("password changed")
      })
    }
  }

}
