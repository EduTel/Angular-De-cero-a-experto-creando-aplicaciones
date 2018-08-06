import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [`
    i{
      font-size: 40px;
    }
  `]
})
export class NgClassComponent implements OnInit {
  typeAlert = 'alert-primary';
  typeMood =  true;
  constructor() {
  }

  ngOnInit() {
  }

}
