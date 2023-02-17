import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  nombre1: footerUs = { nombre: "Aleix"};
  nombre2: footerUs = { nombre: "Martín"} ;
  nombre3: footerUs = { nombre: "Practica 1 Angular"}
}

interface footerUs {
  nombre: string
}