import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalizado' })
export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    console.warn(args);
    console.error(value);
    value = value.toLowerCase();
    let palabras = value.split(' ');
    if (args[0] === true) {
      // tslint:disable-next-line:forin
      for (const i in palabras) {
        palabras[i] = palabras[i][0].toUpperCase() + palabras[i].substr(1);
      }
    } else {
      palabras = Array();
      palabras[0] = value.toUpperCase();
    }
    return palabras.join(' ');
  }
}
