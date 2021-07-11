import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../IEmployee';

@Component({
  selector: 'app-employee-list',
  // templateUrl: './employee-list.component.html',
  template: `
    <div class="card" style="margin-top: 60px;">
      <div class="card-header">
        <h5 class="text-center">Employee List</h5>
      </div>

      <div class="card-body">
        <h5 class="text-danger text-center">{{ errorMessage }}</h5>
        <ul *ngFor="let employee of employees">
          <li class="ms-4">{{ employee.firstName }}</li>
        </ul>
      </div>
      <div class="card-footer">
        <button
          class="btn btn-outline-info m-2 float-start"
          (click)="viewDetails($event)"
        >
          View details
        </button>
        <button
          class="btn btn-outline-danger m-2 float-start"
          (click)="hideDetails($event)"
        >
          Hide details
        </button>
      </div>
      <div *ngIf="show">
        <app-employee-details></app-employee-details>
      </div>
    </div>
  `,
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  public show = false;
  public employees: IEmployee[] = [];
  public errorMessage;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getEmployeeHttp().subscribe(
      (res) => {
        this.employees = res;
      },
      (error) => {
       // this.errorMessage = error.message;
       this.errorMessage="Failed to load"
      }
    );
  }

  viewDetails(event) {
    this.show = true;
  }
  hideDetails(event) {
    this.show = false;
  }
}
