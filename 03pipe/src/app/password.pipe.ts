import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {
  password: string;
  transform(value: any, activar: boolean): any {
    console.warn('pipe activar: ' + activar);
    console.warn('pipe value:   ');
    console.warn(JSON.stringify(value));
    if (activar === true) {
      this.password = '';
      for (const iterator of value.split('')) {
        this.password += '*';
      }
      console.warn('**************Si**************\n');
      return this.password;
    } else {
      console.warn('**************No**************\n');
      return value;
    }
  }

}
