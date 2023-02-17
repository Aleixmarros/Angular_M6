import { Component } from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  miEstilo = {
    'color': 'red',
    'Font-weight': 'bold'
   };
   thel = {
    'Font-family' : 'Press Gothic',
    'color': 'black',
    'Font-weight': 'bold'
   };

   botones = {
    "margin-left.px": "10"
   }
   presentacion={
    "background-color":"rgb(0, 138, 0, 0.5)",
    "color":"white",
    "height.px":"100",
    "display": "flex",
    "justify-content":"center",
    "align-items": "center"    
  }

  black() {
    this.presentacion["background-color"]="rgb(0, 0, 0, 0.5)"; 
    this.presentacion["height.px"]="200"; 
  }

  white() {
    this.presentacion["background-color"]="rgb(255, 255, 255, 0.5)";
    this.presentacion["height.px"]="150"; 

  }

  red() {
    this.presentacion["background-color"]="rgb(255, 0, 0, 0.5)";
    this.presentacion["height.px"]="250"; 

  }


}
