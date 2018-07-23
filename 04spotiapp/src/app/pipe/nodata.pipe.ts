import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nodata'
})
export class NodataPipe implements PipeTransform {

  transform(_value= null, arg: string): any {
    if (arg === 'img') {
      console.log('****************img****************');
      console.log(_value);
      console.log('********************************');
      if (_value === null || _value === '') {
        return 'assets/noimage.jpg';
      } else {
        return _value.url;
      }
    } else if (arg === 'data') {
      if (_value === null || _value === '') {
        return 'No data';
      }
    }
    return _value;

  }

}
