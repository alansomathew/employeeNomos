import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientServieService {

  constructor(private client:HttpClient) { }
  clientapi='http://localhost:3000/client';
  getMydata(id:any):Observable<any>
  {
    return this.client.get(`${this.clientapi}/${id}`)
  }
}
