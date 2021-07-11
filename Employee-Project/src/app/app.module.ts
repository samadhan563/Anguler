import { EmployeeService } from './employee.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
// import { EmployeeListComponent } from './employee-list/employee-list.component';
// import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
// import { DepartmentComponent } from './department/department.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    NavbarComponent,
    // DepartmentDetailsComponent,
        // EmployeeListComponent,
    // EmployeeDetailsComponent,
    // DepartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
