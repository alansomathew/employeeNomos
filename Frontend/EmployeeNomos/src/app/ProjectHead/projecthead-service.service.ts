import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectheadServiceService {

  constructor(private client:HttpClient) {}
    phapi='http://localhost:3000/projecthead';
    getMydata(id:any):Observable<any>
    {
      return this.client.get(`${this.phapi}/${id}`)

    }
    // change password
    getoldpassword(id:any):Observable<any>
    {
      return this.client.get(`${this.phapi}/${id}`)
    }
    // update password
    updatepassword(id:any,data:any):Observable<any>
    {
      return this.client.put(`${this.phapi}/${id}`,data)
    }
    
   
}
