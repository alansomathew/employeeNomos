import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  constructor(private service:AdminServiceService,private route:Router) { }

  ngOnInit(): void {
  }
  departmentform=new FormGroup({
    'departmentname':new FormControl('',Validators.required)
  });
  CreateData()
  {
    console.log("Hai")
    this.service.CreateDept(this.departmentform.value).subscribe((res)=>{
      console.log("Kunjuz")
    });
    this.departmentform.reset();
    this.route.navigateByUrl('/admin/viewdepartment')
  }

}
