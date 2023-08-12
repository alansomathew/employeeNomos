import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-securityqtn',
  templateUrl: './securityqtn.component.html',
  styleUrls: ['./securityqtn.component.css']
})
export class SecurityqtnComponent implements OnInit {
  readdata:any

  constructor(private service:AdminServiceService ) { }

  ngOnInit(): void {
    
  }
  securityform=new FormGroup({
    'securityname':new FormControl('',Validators.required)
  });
  createData()
  {
    this.service.createsecurity(this.securityform.value).subscribe((res)=>{
      console.log("data inserted")
    });
    this.securityform.reset();

  }

}
