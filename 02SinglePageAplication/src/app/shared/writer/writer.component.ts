import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { WritersComponent } from '../writers/writers.component';

import { WriterService, Writer } from '../../servicios/writes.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  private write: any;
  constructor(
    private _ActivatedRoute: ActivatedRoute,
    private _WriterService: WriterService
  ) {
    this._ActivatedRoute.params.subscribe(parametros => {
      console.log(parametros['id']);
      this.write = this._WriterService.getWriter(parametros['id']);
      console.log(this.write);
    });
  }

  ngOnInit() {}
}
