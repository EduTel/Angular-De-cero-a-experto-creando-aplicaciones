import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('HomeComponent constructor');
  }
  ngOnInit() {
    console.log('HomeComponent ngOnInit');
  }
  ngOnChanges() {
    console.log('HomeComponent ngOnChanges');
  }
  ngDoCheck() {
    console.log('HomeComponent ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('HomeComponent ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('HomeComponent ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('HomeComponent ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('HomeComponent ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('HomeComponent ngOnDestroy');
  }
}
