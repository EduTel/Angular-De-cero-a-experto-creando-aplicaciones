import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WriterService, Writer } from '../../servicios/writes.service';
import { WritersComponent } from '../writers/writers.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-show-search-writer',
  templateUrl: './show-search-writer.component.html',
  // styleUrls: ['./show-search-writer.component.css']
})
export class ShowSearchWriterComponent extends WritersComponent implements OnInit  {
  private writes: Writer[];
  private termino: string;
  constructor(private _ActivatedRoute: ActivatedRoute, private _write_service: WriterService, private _router: Router) {
    super(_write_service, _router);
    this._ActivatedRoute.params.subscribe(parametros => {
      console.log(parametros['termino']);
      this.termino = parametros['termino'];
      this.writes = this._write_service.buscar(parametros['termino']);
      console.log('_______________________________________\n');
      console.log(this.writes);
    });
  }

  ngOnInit() {
  }

}
