import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
public langs=['Angular','React','JavaScript','J2EE','J2SE','C','CPP','NodeJs','ExpressJs','Python']
  constructor() { }

  ngOnInit(): void {
  }

}
