import { Component, OnInit } from '@angular/core';
import {TenantService} from '../service/tenant.service';
import {ActivatedRoute,Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  crtData: any;
  form;


  constructor(private _tenService:TenantService,private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { 
    this.form= formBuilder.group({
     firstName:['',Validators.required],
     lastName:['',Validators.required],
     age:['',Validators.required],
     email:['',[Validators.required,Validators.email]],
     gender:['',Validators.required],
     dob:['',Validators.required],
     companyId:['',Validators.required],
    });
    
  }

  ngOnInit() {
   
  }

  register(createData){
    console.log(createData);
    this._tenService.createUser(createData.firstName,createData.lastName,createData.age,createData.email,createData.gender,createData.dob,createData.companyId).subscribe(data=>{
      console.log(data)
      alert("Registered Successfully-Please Login");
     this.router.navigate(['/login']);
    
    })
      
  
  }

}
