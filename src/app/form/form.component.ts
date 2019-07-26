import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  data:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
  }
saveEmployee(empForm){
  
  // this.data=empForm;
  
  // console.log(this.data);
  this.router.navigate(['/tenant']);
}
}
