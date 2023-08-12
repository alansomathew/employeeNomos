import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpServiceService } from '../emp-service.service';

@Component({
  selector: 'app-empchange-password',
  templateUrl: './empchange-password.component.html',
  styleUrls: ['./empchange-password.component.css']
})
export class EmpchangePasswordComponent implements OnInit {
  readdata:any
  password:any
  constructor(private service:EmpServiceService) { }

  ngOnInit(): void {
    this.service.getMydata(sessionStorage.getItem("eid")).subscribe((res)=>{
      this.readdata=res.data 
      this.password=res.data[0].emp_password
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
        alert("Incorrect Password")
      }
    }
  changepassword()
  {
    if(this.changepasswordform.value.newpassword != this.changepasswordform.value.confirmnewpassword)
    {
      alert("Check Password")
    }
    else
    {
      this.service.updatepassword(sessionStorage.getItem("eid"),this.changepasswordform.value).subscribe((res)=>{
        console.log("password changed")
      })
      this.changepasswordform.reset();
    }
  }
}
