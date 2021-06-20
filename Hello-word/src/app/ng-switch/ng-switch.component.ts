import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  // template: `<div class="row mb-0 mr-0 ml-0">
  //   <div class="card col-md-6 offset-md-3">
  //     <div class="card-header text-center">
  //       <h5>Testing of ngSwitch</h5>
  //     </div>
  //     <div class="card-body ">
  //       <div class="row">
  //         <div [ngSwitch]="name">
  //           <div *ngSwitchCase="'angular'">
  //             <h5>I am Using Angular</h5>
  //           </div>
  //           <div *ngSwitchCase="'react'">
  //             <h5>I am Using React</h5>
  //           </div>
  //           <div *ngSwitchDefault>None of Language selected</div>
  //         </div>
  //       </div>
  //       <div class="card-footer">
  //         <button class="btn btn-outline-success " (click)="onClick($event)">
  //           Submit
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // </div>`,
  styleUrls: ['./ng-switch.component.css'],
})
export class NgSwitchComponent implements OnInit {
  public name = 'angular';
  constructor() {}

  ngOnInit(): void {}
  public onClick(event) {
    this.name = 'react';
  }
}
