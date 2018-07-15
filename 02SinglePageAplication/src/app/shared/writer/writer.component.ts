import { Component, OnInit } from '@angular/core';
import { WriterService, Writer } from './../../servicios/writes.service';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html'
  // styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {
  private heroes: Writer[];
  constructor(private write_service: WriterService) {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this.write_service.getWriters();
  }
}
