import { Component, OnInit } from '@angular/core';
import { WriterService, Writer } from '../../servicios/writes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-writer',
  templateUrl: './writers.component.html'
  // styleUrls: ['./writer.component.css']
})
export class WritersComponent implements OnInit {
  private heroes: Writer[];
  constructor(private _write_service: WriterService, private _router: Router) {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this._write_service.getWriters();
  }
  viewWrite(idx: number) {
    console.log(idx);
    this._router.navigate(['/write', idx]);
  }
}
