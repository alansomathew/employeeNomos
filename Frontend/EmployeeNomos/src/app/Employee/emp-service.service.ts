import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {

  constructor(private client:HttpClient) { }
  empapi='http://localhost:3000/emp';
  getMydata(id:any):Observable<any>
  {
    return this.client.get(`${this.empapi}/${id}`)
  }
  // change password
  getoldpassword(id:any):Observable<any>
  {
    return this.client.get(`${this.empapi}/${id}`)
  }
  updatepassword(id:any,data:any):Observable<any>
  {
    return this.client.put(`${this.empapi}/${id}`,data)
  }
}
