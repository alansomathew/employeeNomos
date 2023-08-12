import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {
 
  constructor(private client:HttpClient) { }

  departmentapi='http://localhost:3000/department';
  Getdepartment():Observable <any>
  {
    return this.client.get(`${this.departmentapi}`)
  }


  designationapi='http://localhost:3000/designation';
  Getdesignation():Observable<any>
  {
    return this.client.get(`${this.designationapi}`)
  }
  securityapi='http://localhost:3000/securityqtn';
  getsecurity():Observable<any>
  {
    return this.client.get(`${this.securityapi}`)
  }

  emprapi='http://localhost:3000/emp';
  createempr(data:any):Observable<any>
  {
    return this.client.post(`${this.emprapi}`,data)
  }
  clientapi='http://localhost:3000/client';
  createclient(data:any):Observable<any>
  {
    return this.client.post(`${this.clientapi}`,data)
  }
  
  getSingleDesignation(id:any):Observable<any>
  {
    return this.client.get(`${this.designationapi}/${id}`)
  }
  // take all data of admin,projecthead,client,employee to login
  adminapi='http://localhost:3000/admin';
  GetAdmin():Observable<any>
  {
    return this.client.get(`${this.adminapi}`)
  }
  projectheadapi='http://localhost:3000/projecthead';
  GetProjecthead():Observable<any>
  {
    return this.client.get(`${this.projectheadapi}`)
  }
  employeeapi='http://localhost:3000/employee'
  GetEmployee():Observable<any>
  {
    return this.client.get(`${this.employeeapi}`)
  }
  GetClient():Observable<any>
  {
    return this.client.get(`${this.clientapi}`)
  }


}
