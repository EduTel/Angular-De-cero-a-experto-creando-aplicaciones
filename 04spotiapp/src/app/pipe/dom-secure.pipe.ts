import { Pipe, PipeTransform } from '@angular/core';

import {
  DomSanitizer,
  SafeHtml,
  SafeStyle,
  SafeScript,
  SafeUrl,
  SafeResourceUrl
} from '@angular/platform-browser';


@Pipe({
  name: 'domSecure'
})
export class DomSecurePipe implements PipeTransform {

  Summer_of_69: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {

  }
  transform(value: any, type: string): SafeUrl {
    console.warn('DomSanitizer');
    console.warn(value);
    if (type === 'resourceUrl') {
      return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    } else if (type === 'html') {
      return this.sanitizer.bypassSecurityTrustHtml(value);
    } else if (type === 'style') {
      return this.sanitizer.bypassSecurityTrustStyle(value);
    } else if (type === 'script') {
      return this.sanitizer.bypassSecurityTrustScript(value);
    } else if (type === 'url') {
      return this.sanitizer.bypassSecurityTrustUrl(value);
    } else {
      console.warn(type);
      throw new Error(`Invalid safe type specified: ${type}`);
    }
  }

}
