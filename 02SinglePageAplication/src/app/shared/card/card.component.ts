import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { WritersComponent } from '../writers/writers.component';

import { WriterService, Writer } from '../../servicios/writes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
  // styleUrls: ['./card.component.css']
})
export class CardComponent extends WritersComponent implements OnInit {
  @Input() item: any = {};
  @Input() pocicion: any;
  @Output() consoleEmitter: EventEmitter<any> = new EventEmitter();
  constructor(_write_service: WriterService, _router: Router) {
    super(_write_service, _router);
  }
  ngOnInit() {}
  vote(p_index: any) {
    console.log('****************vote****************\n');
    p_index = '__' + p_index + '__';
    this.consoleEmitter.emit(p_index);
  }
}
