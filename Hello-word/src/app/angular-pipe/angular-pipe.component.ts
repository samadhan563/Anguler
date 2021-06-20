import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  // templateUrl: './angular-pipe.component.html',
  template: `<div class="row mb-0 mr-0 ml-0">
    <div class="card col-md-6 offset-md-3">
      <div class="card-header text-center">
        <h5>Testing of ngSwitch</h5>
      </div>
      <div class="card-body ">
        <div class="row">
          <h5>{{ firstName | lowercase }} {{ lastName | lowercase }}</h5>
          <h5>{{ firstName | uppercase }} {{ lastName | uppercase }}</h5>
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
  constructor() {}

  ngOnInit(): void {}
  public onClick(event) {
    this.firstName = 'Java';
    this.lastName = 'Advance Java';
  }
}
