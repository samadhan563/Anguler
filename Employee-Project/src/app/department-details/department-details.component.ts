import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css'],
})
export class DepartmentDetailsComponent implements OnInit {
  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // let id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.route.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('id') || '');
      this.departmentId = id;
    });
  }
  previous() {
    this.router.navigate(['department', this.departmentId - 1]);
  }
  next() {
    this.router.navigate(['department', this.departmentId + 1]);
  }
  gotoDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate([
    //   'departments',
    //   { id: selectedId, test: 'testValue' },
    // ]);
    this.router.navigate(['../', { id: selectedId }], {
      relativeTo: this.route  
    });
    // this.router.navigate(['departments', { id: selectedId }]);
  }
}
