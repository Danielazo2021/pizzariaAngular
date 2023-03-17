import { Component , OnInit} from '@angular/core';
import { IItems } from 'src/app/interface/item.interface';
import{PIZZAS} from 'src/app/mock/items.mock';


@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss']
})
export class PizzasComponent implements OnInit{
 pizas:IItems[]=PIZZAS;
indice:number=1;

  constructor(){}
  ngOnInit(): void {
   
  }
  agregar(item:IItems){
    if(sessionStorage.getItem(`pizzas${this.indice}`))
    {
    this.indice++;
    }
    sessionStorage.setItem(`pizzas${this.indice}`, JSON.stringify(item));
    alert('Se agrego  '+ item.nombre+' por '+ item.cantidad +' correctamente al pedido');
    item.cantidad=0;
    }
  
}
