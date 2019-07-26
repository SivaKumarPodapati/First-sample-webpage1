import { Component, OnInit } from '@angular/core';
import { TenantService } from '../service/tenant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  allEmp: any;

  constructor(private _tenService: TenantService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getAllEmp()
  }
  getAllEmp() {
    this._tenService.getEmployees().subscribe(data => {
      console.log(data);
      this.allEmp = data;
    })
  }
  delEmp(empId) {
    var fix = confirm("Are you sure to delete the Employee Data?")
    if (fix == true) {
      return this._tenService.deleteEmp(empId).subscribe(data => {
        console.log(data)
        this.ngOnInit();
      });
    } else {
      return false;
    }
  }
}
