import { Component, OnInit } from '@angular/core';
import { POSTRES } from 'src/app/mock/items.mock';
import { IItems } from 'src/app/interface/item.interface';
@Component({
  selector: 'app-postre',
  templateUrl: './postre.component.html',
  styleUrls: ['./postre.component.scss']
})
export class PostreComponent implements OnInit{
postres:IItems[]=POSTRES;
indice:number=1;
constructor(){}
ngOnInit(): void {
 
}
agregar(item:IItems){
  if(sessionStorage.getItem(`postre${this.indice}`))
  {
  this.indice++;
  }
  sessionStorage.setItem(`postre${this.indice}`, JSON.stringify(item));
  alert('Se agrego  '+ item.nombre+' por '+ item.cantidad +' correctamente al pedido');
  item.cantidad=0;
  }

}
