import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css'],
})
export class NgIfComponent implements OnInit {
  public name = 'angular';
  public show;
  constructor() {}

  ngOnInit(): void {
    if ((this.name = 'angular')) this.show = true;
    else this.show = false;
  }

  /**
   * onClick
   */
  public onClick(event) {
    this.name = 'react';
    this.show = false;
  }
}
