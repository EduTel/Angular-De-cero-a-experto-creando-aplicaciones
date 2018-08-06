import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  template: `
    <p class='mi_parraf'>
      css works!
    </p>
  `,
  styles: [`
    .mi_parraf{
      color:blue;
    }
  `]
})
export class CssComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
