import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  public employees ;
  public errorMessage;
  constructor(private _employeeService:EmployeeService) {}

  ngOnInit(): void {
     this._employeeService.getEmployeeHttp()
     .subscribe((data)=>{
       this.employees=data;
     },(error)=>{
      // this.errorMessage=error.message;
      this.errorMessage="Failed to load"
     })
  }

  viewDetails(event) {}
}
