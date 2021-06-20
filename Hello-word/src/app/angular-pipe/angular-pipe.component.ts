import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  // templateUrl: './angular-pipe.component.html',
  template: `<div class="row mb-0 mr-0 ml-0">
    <div class="card col-md-6 offset-md-3">
      <div class="card-header text-center">
        <h5>Testing of Pipe Directive in Angular</h5>
      </div>
      <div class="card-body ">
        <div class="row">
          <h5>{{ firstName | lowercase }} {{ lastName | lowercase }}</h5>
          <h5>{{ firstName | uppercase }} {{ lastName | uppercase }}</h5>
          <h5>{{ firstName | titlecase }}</h5>
          <h5>{{ firstName | slice: 4:8 }}</h5>
          <h5>{{ details | json }}</h5>
          <h5>{{ 5.666 | number: '1.1-3' }}</h5>
          <h5>{{ 5.666 | number: '2.4-5' }}</h5>
          <h5>{{ 5.666 | number: '3.1-2' }}</h5>
          <h5>{{ 0.18 | percent }}</h5>
          <h5>{{ 200 | currency }}</h5>
          <h5>{{ 200 | currency: 'USD' }}</h5>
          <h5>{{ 200 | currency: 'GBP':'code' }}</h5>
          <h5>{{ date | date: 'dd/MM/yyyy' }}</h5>
          <h5>{{ date | date: 'short' }}</h5>
          <h5>{{ date | date: 'shortDate' }}</h5>
          <h5>{{ date | date: 'shortTime' }}</h5>
        </div>
        <div class="card-footer">
          <button class="btn btn-outline-success " (click)="onClick($event)">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>`,
  styleUrls: ['./angular-pipe.component.css'],
})
export class AngularPipeComponent implements OnInit {
  public firstName = 'Samadhan';
  public lastName = 'Gaikwad';
  public date = new Date();
  public details = {
    firstName: 'Samadhan',
    lastName: 'Gaikwad',
  };
  constructor() {}

  ngOnInit(): void {}
  public onClick(event) {
    this.firstName = 'Java';
    this.lastName = 'Advance Java';
  }
}
