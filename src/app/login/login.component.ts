import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 form;
hide=true;
  constructor(private route:ActivatedRoute,private router:Router,private formBuilder:FormBuilder) { 
    this.form=formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required],
    });
  }

  ngOnInit() {
  }


  

  login(){
    this.router.navigate(['/employee']);
  }
}
