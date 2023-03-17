import { Component, OnInit } from '@angular/core';
import { IItems } from 'src/app/interface/item.interface';
import { EMPANADAS } from 'src/app/mock/items.mock';

@Component({
  selector: 'app-empanadas',
  templateUrl: './empanadas.component.html',
  styleUrls: ['./empanadas.component.scss']
})
export class EmpanadasComponent implements OnInit {
empanadas: IItems[]=EMPANADAS;
indice:number=1;
constructor(){}
ngOnInit(): void {
  
}
agregar(item:IItems){
  if(sessionStorage.getItem(`empanadas${this.indice}`))
  {
  this.indice++;
  }
  sessionStorage.setItem(`empanadas${this.indice}`, JSON.stringify(item));
  alert('Se agrego  '+ item.nombre+' por '+ item.cantidad +' correctamente al pedido');
  item.cantidad=0;
  }
}
