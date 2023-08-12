import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-projecthead-registration',
  templateUrl: './projecthead-registration.component.html',
  styleUrls: ['./projecthead-registration.component.css']
})
export class ProjectheadRegistrationComponent implements OnInit {
  readdata:any
  readdata1:any
  readdata2:any

  constructor(private service:AdminServiceService,private route:Router) { }

  ngOnInit(): void {
    this.service.getDepartment().subscribe((res)=>{
      this.readdata=res.data
      })
      
      this.service.getsecurity().subscribe((res)=>{
        this.readdata2=res.data
        console.log(res.data)
    })
    
    }
  projecthead=new FormGroup({
    'fname':new FormControl('',Validators.required),
     'lname':new FormControl('',Validators.required),
     'gender':new FormControl('',Validators.required),
     'contact':new FormControl('',Validators.required),
     'email':new FormControl('',Validators.required),
     'address':new FormControl('',Validators.required),
     'aadhar':new FormControl('',Validators.required),
     'uname':new FormControl('',Validators.required),
     'password':new FormControl('',Validators.required),
     'cpassword':new FormControl('',Validators.required),
     'dob':new FormControl('',Validators.required),
     'sqtn':new FormControl('',Validators.required),
     'answer':new FormControl('',Validators.required),
     'dept':new FormControl('',Validators.required),
     'desig':new FormControl('',Validators.required)
  });
  createdata()
  {
    this.service.createprojecthead(this.projecthead.value).subscribe((res)=>{
      console.log("data inserted")
    });
    this.projecthead.reset();
    this.route.navigateByUrl("/admin/viewprojecthead")
  }
  getDesignation(e:any)
  {
    
    this.service.getSingleDesignation(e.target.value).subscribe((res)=>{
      this.readdata1=res.data
      
    });
  }

}
