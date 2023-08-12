import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GuestServiceService } from '../guest-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admindata:any
  admindatalength:any
  empdata:any
  empdatalength:any
  clientdata:any
  clientdatalength:any
  phdata:any
  phdatalength:any
  flag:any=0
  constructor(private service:GuestServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.GetAdmin().subscribe((res)=>{
      this.admindata=res.data
      console.log(res.data)
      this.admindatalength=res.data.length
    })
    this.service.GetEmployee().subscribe((res)=>{
      this.empdata=res.data
      this.empdatalength=res.data.length
    })
    this.service.GetClient().subscribe((res)=>{
      this.clientdata=res.data
      this.clientdatalength=res.data.length
    })
    this.service.GetProjecthead().subscribe((res)=>{
      this.phdata=res.data
      this.phdatalength=res.data.length
    })
  }
  loginform=new FormGroup({
   'email':new FormControl('',Validators.required),
   'password':new FormControl('',Validators.required)
  })
  login()
  {
    // console.log("Hai")
    
    for(let i=0;i<this.admindatalength;i++)
    {
      if((this.loginform.value.email===this.admindata[i].admin_uname)&&(this.loginform.value.password===this.admindata[i].admin_password))
      {
        this.flag=1;
        this.route.navigateByUrl("/admin");
      }
    }
  
 
    for(let i=0;i<this.empdatalength;i++)
    {
      if((this.loginform.value.email===this.empdata[i].emp_username)&&(this.loginform.value.password===this.empdata[i].emp_password))
      {
        sessionStorage.setItem("cid",this.empdata[i].emp_id)
        this.flag=1;
        this.route.navigateByUrl("/employee-nav");
      }
    }

    for(let i=0;i<this.clientdatalength;i++)
    {
      if((this.loginform.value.email===this.clientdata[i].client_uname)&&(this.loginform.value.password===this.clientdata[i].client_password))
      {
        sessionStorage.setItem("cid",this.clientdata[i].client_id)
        this.flag=1;
        this.route.navigateByUrl("/client-nav");
      }
    }
  
    for(let i=0;i<this.phdatalength;i++)
    {
      if((this.loginform.value.email===this.phdata[i].ph_uname)&&(this.loginform.value.password===this.phdata[i].ph_password))
      {
        sessionStorage.setItem("pid",this.phdata[i].ph_id)
        this.flag=1;
        this.route.navigateByUrl("/projecthead-nav");
      }
    }

    
    if(this.flag===0)
    {
 
    alert("Invalid Username and Paasword");
    }
    else{
      this.flag=0;
    }
   
  }

}
