import { Component, OnInit } from '@angular/core';
import { GuestServiceService } from '../guest-service.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-client-registration',
  templateUrl: './client-registration.component.html',
  styleUrls: ['./client-registration.component.css']
})
export class ClientRegistrationComponent implements OnInit {
readdata:any
  constructor(private service:GuestServiceService) { }

  ngOnInit(): void {
    this.service.getsecurity().subscribe((res)=>{
      this.readdata=res.data
      console.log(res.data)
  })
    }
    client= new FormGroup({
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


    }) 
    createdata(){
      this.service.createclient(this.client.value).subscribe((res)=>{
        console.log("data inserted")
      });
      this.client.reset();
    }

}
