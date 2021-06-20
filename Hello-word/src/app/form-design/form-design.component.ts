import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-design',
  templateUrl: './form-design.component.html',
  // template: `
  //   <div class="row mt-5 mb-0 mr-0 ml-0">
  //     <div class="card col-md-6 offset-md-3 mt-4">
  //       <div class="card-header text-center">
  //         <h5>Registration Form</h5>
  //       </div>
  //       <div class="card-body ">
  //         <form>
  //           <!-- using interpolation -->
  //           <div class="form-group row mt-2">
  //             <label for="inputPassword" class="col-form-label col-sm-2"
  //               >First Name</label
  //             >
  //             <div class="col-sm-10">
  //               <input
  //                 type="text"
  //                 class=" form-control"
  //                 placeholder="User Name"
  //                 [value]="firstName"
  //                 (change)="onChange($event)"
  //               />
  //             </div>
  //           </div>

  //           <div class="form-group row mt-2">
  //             <label for="inputPassword" class="col-form-label col-sm-2"
  //               >Last Name</label
  //             >
  //             <div class="col-sm-10">
  //               <input
  //                 type="text"
  //                 class=" form-control"
  //                 placeholder="User Name"
  //                 [value]="lastName"
  //               />
  //             </div>
  //           </div>

  //           <div class="form-group row mt-2">
  //             <label for="inputPassword" class="col-form-label col-sm-2"
  //               >Mobile Number</label
  //             >
  //             <div class="col-sm-10">
  //               <input
  //                 type="text"
  //                 class=" form-control"
  //                 placeholder="Mobile Number"
  //                 bind-value="mobileNumber"
  //                 required="true"
  //                 (change)="onChange($event)"
  //               />
  //             </div>
  //           </div>
  //           <div class="form-group row mt-2">
  //             <label for="inputPassword" class="col-sm-2 col-form-label "
  //               >Password</label
  //             >
  //             <div class="col-sm-10">
  //               <input
  //                 type="password"
  //                 class="form-control"
  //                 id="inputPassword"
  //                 placeholder="Password"
  //                 value="sama#1234"
  //               />
  //             </div>
  //           </div>
  //         </form>
  //       </div>
  //       <div class="card-footer" *ngIf="displayButton">
  //         <button
  //           ngClass="btn btn-outline-danger ml-2 mr-2"
  //           (click)="logMyVal($event)"
  //         >
  //           Back
  //         </button>
  //         <button
  //           class="btn btn-outline-success "
  //           style="margin-left: 7px;"
  //           (click)="onClick($event)"
  //         >
  //           Submit
  //         </button>

  //        <div *ng></div>
  //       </div>
  //     </div>
  //   </div>
  // `,
  styleUrls: ['./form-design.component.css'],
})
export class FormDesignComponent implements OnInit {
  // @Input("name") public name;
  // @Output() public chlidEvent=new EventEmitter();
  public firstName = 'Samadhan';
  lastName = 'Gaikwad';
  mobileNumber = '9527644283';
  constructor() {}

  ngOnInit(): void {}

  onClick(event) {

    event.preventDefault();
    console.log('Welcome to anguler 😄', this.firstName);
    alert('ok 😄' + JSON.stringify(this.firstName));
    alert('ok 😄' + JSON.stringify(this.mobileNumber));
    // this.chlidEvent.emit("Welcome to angular...")
  }

  public onChange = (e) => {
    
  };

  logMyVal(event) {
    console.log(JSON.stringify(event));
  }
   
   
}
