import { Component, OnInit } from '@angular/core';
import { GuestServiceService } from '../guest-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.css']
})
export class EmployeeRegistrationComponent implements OnInit {
  readdata:any
  readdata1:any
  readdata2:any
  constructor(private service:GuestServiceService,private Route:Router) { }

  ngOnInit(): void {
    this.service.Getdepartment().subscribe((res)=>{
      this.readdata=res.data
      })
     
      this.service.getsecurity().subscribe((res)=>{
        this.readdata2=res.data
        console.log(res.data)
    })
  }
  emp=new FormGroup({
    'fname':new FormControl('',Validators.required),
     'lname':new FormControl('',Validators.required),
     'gender':new FormControl('',Validators.required),
     'contact':new FormControl('',Validators.required),
     'email':new FormControl('',Validators.required),
     'address':new FormControl('',Validators.required),
     'uname':new FormControl('',Validators.required),
     'password':new FormControl('',Validators.required),
     'cpassword':new FormControl('',Validators.required),
     'dob':new FormControl('',Validators.required),
     'sqtn':new FormControl('',Validators.required),
     'answer':new FormControl('',Validators.required),
     'dept':new FormControl('',Validators.required),
     'desig':new FormControl('',Validators.required)

  })
  createdata()
  {
    this.service.createempr(this.emp.value).subscribe((res)=>{
      console.log("data inserted")
    });
    this.emp.reset();
  }
  getDesignation(e:any){
    this.Route.navigateByUrl("/employee")
    this.service.getSingleDesignation(e.target.value).subscribe((res)=>{
      this.readdata1=res.data
      console.log(res.data)
    });
  }

}
