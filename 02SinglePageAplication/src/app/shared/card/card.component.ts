import { Component, OnInit, Input } from '@angular/core';
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
  @Input() index: number;
  constructor(_write_service: WriterService, _router: Router) {
    super(_write_service, _router);
  }

  ngOnInit() {}
}
