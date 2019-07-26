import { Component, OnInit } from '@angular/core';
import {TenantService} from '../service/tenant.service';

@Component({
  selector: 'app-tenant',
  templateUrl: './tenant.component.html',
  styleUrls: ['./tenant.component.css']
})
export class TenantComponent implements OnInit {
  selected="T1Rep";
  tenantData: any;
  showSpinner:boolean=false;
  p:number=1;

  constructor(private _tenService:TenantService) { }

  ngOnInit() {

     this.tenantDetails(this.selected); 
  }
  tenantDetails(tName){
    console.log(this.selected);
    this.showSpinner=true;
    this._tenService.getTenant(tName).subscribe(data=>{
      console.log(data);
      this.tenantData=data;
      this.showSpinner=false;
  
    });
   }

} 
