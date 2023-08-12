import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {

  constructor(private client:HttpClient) { }
  designationapi='http://localhost:3000/designation';
  

  CreateDesignation(data:any):Observable<any>
  {
    return this.client.post(`${this.designationapi}`,data)
  }
  getDesignation():Observable<any>
  {
    return this.client.get(`${this.designationapi}`)
  }

  departmentapi='http://localhost:3000/department';

  CreateDept(data:any):Observable<any>
  {
    return this.client.post(`${this.departmentapi}`,data)
  }
  getDepartment():Observable<any>
  {
    return this.client.get(`${this.departmentapi}`)
  }
  Deletedept(id:any):Observable<any>
  {
    return this.client.delete(`${this.departmentapi}/${id}`)
  }
  Deletedesign(id:any):Observable<any>
  {
    return this.client.delete(`${this.designationapi}/${id}`)
  }

  securityapi='http://localhost:3000/securityqtn';
  createsecurity(data:any):Observable<any>
  {
    return this.client.post(`${this.securityapi}`,data)
  }
  getsecurity():Observable<any>
  {
    return this.client.get(`${this.securityapi}`)
  }
  Deletesecurity(id:any):Observable<any>
  {
    return this.client.delete(`${this.securityapi}/${id}`)
  }

  projectheadapi='http://localhost:3000/projecthead';
  createprojecthead(data:any):Observable<any>
  {
    return this.client.post(`${this.projectheadapi}`,data)
  }
  getprojecthead():Observable<any>
  {
    return this.client.get(`${this.projectheadapi}`)
  }
  Deleteprojecthead(id:any):Observable<any>
  {
    return this.client.delete(`${this.projectheadapi}/${id}`)
  }

  newemployeeapi='http://localhost:3000/newemployee';
  getnewemployee():Observable<any>
  {
    return this.client.get(`${this.newemployeeapi}`)
  }
  acceptempapi='http://localhost:3000/acceptemp';
  AcceptEmployee(id:any,data:any):Observable<any>
  {
    return this.client.put(`${this.acceptempapi}/${id}`,data)
  }
  rejectapi='http://localhost:3000/rejectemp';
  RejectEmployee(id:any,data:any):Observable<any>
  {
    return this.client.put(`${this.rejectapi}/${id}`,data)
  }

  // view accepted employee
  acceptedempapi='http://localhost:3000/acceptedemployee';
  getemployee():Observable<any>
  {
    return this.client.get(`${this.acceptedempapi}`)
  }
  rejectEapi='http://localhost:3000/rejectemp';
  RejectedEmployee(id:any,data:any):Observable<any>
  {
    return this.client.put(`${this.rejectEapi}/${id}`,data)
  }

  // view rejected employee
  rejectedempapi='http://localhost:3000/rejectedemployee';
  getRejectedEmployee():Observable<any>
  {
    return this.client.get(`${this.rejectedempapi}`)
  }
  acceptEapi='http://localhost:3000/acceptemp';
  AcceptedEmployee(id:any,data:any):Observable<any>
  {
    return this.client.put(`${this.acceptEapi}/${id}`,data)
  }
  // usig ajax in project head
  getSingleDesignation(id:any):Observable<any>
  {
    return this.client.get(`${this.designationapi}/${id}`)
  }
}
