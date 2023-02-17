import { Component } from '@angular/core';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
  th1 = [
    { nombre: 'The last of Us', plataforma: 'PS3', descripcion: 'The Last of Us es un videojuego de terror, acción y aventura desarrollado por la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola PlayStation 3 en 2013.', precio: 19.99,url:'../../images/1.jpg'},
    { nombre: 'The last of Us', plataforma: 'PS4', descripcion: 'The Last of Us es un videojuego de terror, acción y aventura desarrollado por la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola PlayStation 3 en 2013.', precio: 29.99,url:'../../images/1.jpg'},
    { nombre: 'The last of Us', plataforma: 'PS5', descripcion: 'The Last of Us es un videojuego de terror, acción y aventura desarrollado por la compañía estadounidense Naughty Dog y distribuido por Sony Computer Entertainment para la consola PlayStation 3 en 2013.', precio: 39.99,url:'../../images/1.jpg'},
   
  ];
  th1r = [
    { nombre: 'The last of Us Remastered', plataforma: 'PS4', descripcion: 'The Last of Us Remasterizado es una edición especial de The Last of Us. Desarrollado también por Naughty Dog, y publicado por Sony Computer Entertainment el 29 de julio de 2014.', precio: 19.99,url:'../images/2.jpg'},

  ];
  th2 = [
    { nombre: 'The last of Us Part II', plataforma: 'PS4', descripcion: 'The Last of Us Part II es un videojuego de terror y de acción y aventuras de 2020 desarrollado por Naughty Dog y publicado por Sony Interactive Entertainment para PlayStation 4.', precio: 29.99,url:'../images/3.jpg'},
  ];
}
