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


  constructor(){}
  ngOnInit(): void {
   
  }
}
