import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TenantService {
  

   token:string="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhdmluYXNoa0Bsb2dpY21hdHRlci5jb20iLCJqdGkiOiJjNmU4MmY2ZS1lYTRiLTQ1OTUtOTNmOC04MDcyNmJlZDA1OGUiLCJ1bmlxdWVfbmFtZSI6ImF2aW5hc2hrQGxvZ2ljbWF0dGVyLmNvbSIsImV4cCI6MTU2MzQ3NDc2OSwiaXNzIjoiaHR0cHM6Ly9wb2ludC1tYXR0ZXIuYXp1cmV3ZWJzaXRlcy5uZXQiLCJhdWQiOiJ1c2VycyJ9.IhJEmjkgYlPbyqHWBGtdKmB4QmnV-ltY7Mpe3cIyhOc";
   action:string="getDataById";

  constructor(private http:HttpClient) { }
 

 
  public getTenant(name:string):Observable<any>{
    return this.http.get('https://script.google.com/macros/s/AKfycbxnjnSsRJ968hf4_v4HZqEvo_Wfv5a5jX6wxATFEqwVbhVV3Dc/exec?token='+this.token+'&action='+this.action+'&name='+name)
  }

  public createUser(firstName:any,lastName:any,age:number,email:any,gender:any,dob:any,companyId:any):Observable<any>{
    return this.http.post('http://localhost:3000/users',{firstName,lastName,age,email,gender,dob,companyId})
  }

  public getEmployees():Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }
  
  public addEmp(id:number):Observable<any>{
    return this.http.get('http://localhost:3000/users/'+id)
  }
  
  public updateEmp(id:any,companyId:any,firstName:string,lastName:string,email:any,gender:any,dob:any):Observable<any>{
    return this.http.put('http://localhost:3000/users/'+id,{companyId,firstName,lastName,email,gender,dob})
  }

  public deleteEmp(id:any):Observable<any>{
    return this.http.delete('http://localhost:3000/users/'+id);
  }

}