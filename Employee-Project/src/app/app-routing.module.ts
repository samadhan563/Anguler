import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { DepartmentComponent } from './department/department.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'emplpyees', pathMatch: 'full' },
  { path: 'emplpyees', component: EmployeeListComponent },
  { path: 'emplpyees-details', component: EmployeeDetailsComponent },
  { path: 'departments-list', component: DepartmentComponent },
  { path: 'departments-list/:id', component: DepartmentDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponent = [
  EmployeeDetailsComponent,
  DepartmentComponent,
  EmployeeListComponent,
  PageNotFoundComponent,
  DepartmentDetailsComponent,
];
