import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from '@angular/forms'
import { AdminServiceService } from '../admin-service.service';
@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {

  constructor(private service:AdminServiceService) { }
  readdata:any
  ngOnInit(): void {
    this.service.getDepartment().subscribe((res)=>{
      this.readdata=res.data
      })
  }
 designationform=new FormGroup({
   'dept':new FormControl('',Validators.required),
   'designationname':new FormControl('',Validators.required)
 });
 CreateData(){
this.service.CreateDesignation(this.designationform.value).subscribe((res)=>{
  console.log("Data Inserted")
});
this.designationform.reset();
 }
 
}
