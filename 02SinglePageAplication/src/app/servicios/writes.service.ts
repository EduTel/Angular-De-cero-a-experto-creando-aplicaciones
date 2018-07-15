import { Injectable } from '@angular/core';

@Injectable()
export class WriterService {
  private Writers: Writer[] = [
    {
      nombre: "Albert Camus",
      bio:
        "Albert Camus fue un novelista, ensayista, dramaturgo, filósofo y periodista francés nacido en Argelia.",
      img: "assets/img/AlbertCamus.jpg",
      nacimiento: "7 de noviembre de 1913",
      nacionalidad: "Francés"
    },
    {
      nombre: "Alejandro Dumas",
      bio:
        "Dumas Davy de la Pailleterie, más conocido como Alexandre Dumas y en los países hispanohablantes como Alejandro Dumas, fue un novelista y dramaturgo francés.",
      img: "assets/img/AlejandroDumas.jpg",
      nacimiento: "24 de julio de 1802",
      nacionalidad: "Francés"
    },
    {
      nombre: "Arthur Schopenhauer",
      bio:
        "Es considerado una de las personalidades filosóficas más brillantes del siglo XIX.",
      img: "assets/img/ArthurSchopenhauer.jpg",
      nacimiento: "Arthur Schopenhauer",
      nacionalidad: "Alemán"
    },
    {
      nombre: "Carlos Fuentes",
      bio:
        "Carlos Fuentes Macías fue un escritor, intelectual y diplomático mexicano, uno de los autores más destacados de su país y de las letras hispanoamericanas.",
      img: "assets/img/CarlosFuentes.jpg",
      nacimiento: "11 de noviembre de 1928",
      nacionalidad: "Mexicano"
    },
    {
      nombre: "Gabriel Garcia Marquez",
      bio:"Gabriel José de la Concordia García Márquez fue un escritor, guionista, editor y periodista colombiano.",
      img: "assets/img/GabrielGarciaMarquez.jpg",
      nacimiento: "6 de marzo de 1927",
      nacionalidad: "Colombiano"
    },
    {
      nombre: "Julio Verne",
      bio:
        "Jules Gabriel Verne, conocido en los países hispanohablantes como Julio Verne, fue un escritor, poeta y dramaturgo francés célebre por sus novelas de aventuras y por su profunda influencia en el género literario de la ciencia ficción.",
      img: "assets/img/JulioVerne.jpg",
      nacimiento: "8 de febrero de 1828",
      nacionalidad: "Francés"
    },
    {
      nombre: "Richard Bach",
      bio:
        "Richard David Bach es un escritor estadounidense. Es ampliamente conocido por sus populares novelas de la década de 1970: Juan Salvador Gaviota e Ilusiones, entre otras.",
      img: "assets/img/RichardBach.jpg",
      nacimiento: "23 de junio de 1936",
      nacionalidad: "Estadounidense"
    }
  ];
  constructor() {
    console.log("el servicio esta listo para usarse");
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
