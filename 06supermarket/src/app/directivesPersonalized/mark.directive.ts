import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMark]'
})
export class MarkDirective {
  constructor(private _ElementRef: ElementRef ) {
    console.log('appMark start');
    _ElementRef.nativeElement.style.backgroundColor = 'yellow';
  }
  @Input('appHighlight') c_highlightColor: string;
  @HostListener('mouseenter')
  mouseentro() {
    this.f_market(this.c_highlightColor || 'green');
  }
  @HostListener('mouseleave')
  mousesalio() {
    this.f_market('yellow');
  }
  private f_market(_color: string) {
    this._ElementRef.nativeElement.style.backgroundColor = _color;
  }
}
