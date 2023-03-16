import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  seleccionado:string="";
constructor(){}
ngOnInit(): void {
  
}

  Pizzaseleccionado(){
    this.seleccionado="Pizza"
    console.log(this.seleccionado);

  }
  Empanadaseleccionado(){
    this.seleccionado="Empanada"
    console.log(this.seleccionado);

  }
  Bebidaseleccionado(){
    this.seleccionado="Bebida"
    console.log(this.seleccionado);

  }
  Postreseleccionado(){
    this.seleccionado="Postre"
    console.log(this.seleccionado);

  }
}
