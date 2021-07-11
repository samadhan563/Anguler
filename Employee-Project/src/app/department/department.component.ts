import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-department',
  template: `
    <div class="card" style="margin-top: 60px;">
      <div class="card-header">
        <h5 class="text-center">Department List</h5>
      </div>
      <div class="card-body">
        <ul class="list-group">
          <li
            [class.selected]="isSelected(employee)"
            *ngFor="let employee of employees"
            class="list-group-item list-group-item-action"
            (click)="onSelect(employee)"
          >
            {{ employee.firstName | titlecase }}
          </li>
        </ul>
      </div>
    </div>
  `,
  styleUrls: ['./department.component.css'],

})
export class DepartmentComponent implements OnInit {
  public employees;
  public errorMessage;
  public selectedId;
  constructor(
    private _employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._employeeService.getEmployeeHttp().subscribe(
      (data) => {
        this.employees = data;
      },
      (error) => {
        // this.errorMessage=error.message;
        this.errorMessage = 'Failed to load';
      }
    );
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = param.get('id');
      this.selectedId = id;
      console.log(id);
      // this.router.navigate(['department',id])
    });
  }

  onSelect(employee) {
    // this.router.navigate(['/departments', employee.id]);
    this.router.navigate([employee.id], { relativeTo: this.route });
  }

  isSelected(employee) {
    return this.selectedId === employee.id;
  }
}
