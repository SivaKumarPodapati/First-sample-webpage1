import { Component, OnInit } from '@angular/core';
import { TenantService } from '../service/tenant.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  updateEmp: any = [];
  id: any;
  


  constructor(private _tenService: TenantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.addEmployee();
  }

  addEmployee() {
   
    this._tenService.addEmp(this.id).subscribe(data => {
      console.log(data)
      this.updateEmp.push(data);
    
    })
  }
  editEmp(upDate) {
    
    console.log(upDate)
    this._tenService.updateEmp(upDate.id, upDate.companyId, upDate.firstName, upDate.lastName, upDate.email, upDate.gender, upDate.dob).subscribe(data => {
      console.log(data)
      
    this.router.navigate(['/employee'])
    })
  }
 backClick(){
  this.router.navigate(['/employee'])
 }
}
