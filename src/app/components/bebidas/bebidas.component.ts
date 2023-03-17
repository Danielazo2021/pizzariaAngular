import { Component , OnInit} from '@angular/core';
import { BEBIDAS } from 'src/app/mock/items.mock';
import { IItems } from 'src/app/interface/item.interface';
@Component({
  selector: 'app-bebidas',
  templateUrl: './bebidas.component.html',
  styleUrls: ['./bebidas.component.scss']
})
export class BebidasComponent implements OnInit {
bebidas: IItems[]=BEBIDAS
indice:number=1;

constructor(){}
ngOnInit(): void {
  
}
agregar(item:IItems){
if(sessionStorage.getItem(`bebida${this.indice}`))
{
this.indice++;
}
sessionStorage.setItem(`bebida${this.indice}`, JSON.stringify(item));
alert('Se agrego  '+ item.nombre+' por '+ item.cantidad +' correctamente al pedido');
item.cantidad=0;
}
}
