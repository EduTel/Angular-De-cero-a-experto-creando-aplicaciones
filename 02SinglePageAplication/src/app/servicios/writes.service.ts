import { Injectable } from '@angular/core';

@Injectable()
export class WriterService {
  private Writers: Writer[] = [
    {
      nombre: 'Aquaman',
      bio: '',
      img: 'assets/img/aquaman.png',
      nacimiento: '1941-11-01',
      nacionalidad: 'DC'
    },
    {
      nombre: 'Batman',
      bio: '',
      img: 'assets/img/batman.png',
      nacimiento: '1939-05-01',
      nacionalidad: 'DC'
    },
    {
      nombre: 'Daredevil',
      bio: '',
      img: 'assets/img/daredevil.png',
      nacimiento: '1964-01-01',
      nacionalidad: 'Marvel'
    },
    {
      nombre: 'Hulk',
      bio: '',
      img: 'assets/img/hulk.png',
      nacimiento: '1962-05-01',
      nacionalidad: 'Marvel'
    },
    {
      nombre: 'Linterna Verde',
      bio: '',
      img: 'assets/img/linterna-verde.png',
      nacimiento: '1940-06-01',
      nacionalidad: 'DC'
    },
    {
      nombre: 'Spider-Man',
      bio: '',
      img: 'assets/img/spiderman.png',
      nacimiento: '1962-08-01',
      nacionalidad: 'Marvel'
    },
    {
      nombre: 'Wolverine',
      bio: '',
      img: 'assets/img/wolverine.png',
      nacimiento: '1974-11-01',
      nacionalidad: 'Marvel'
    }
  ];
  constructor() {
    console.log('el servicio esta listo para usarse');
  }
  getWriters(): Writer[] {
    return this.Writers;
  }
}
export interface Writer {
  nombre: string;
  bio: string;
  img: string;
  nacimiento: string;
  nacionalidad: string;
}
