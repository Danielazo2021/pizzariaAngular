import { Component } from '@angular/core';
import { IItems } from 'src/app/interface/item.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vista-del-pedido',
  templateUrl: './vista-del-pedido.component.html',
  styleUrls: ['./vista-del-pedido.component.scss']
})
export class VistaDelPedidoComponent {
  pedido:IItems[]=[];
  indice:number=1;
    constructor(private router:Router){}
    ngOnInit(): void {
    
      while(sessionStorage.getItem(`pizzas${this.indice}`)){
       let item:any= sessionStorage.getItem(`pizzas${this.indice}`)
      
       let itemOk:IItems= JSON.parse(item)
       this.pedido.push(itemOk);
       this.indice++;
      }
      this.indice=1;
      
      //empanadas
      while(sessionStorage.getItem(`empanadas${this.indice}`)){
        let item:any= sessionStorage.getItem(`empanadas${this.indice}`)
       
        let itemOk:IItems= JSON.parse(item)
        this.pedido.push(itemOk);
        this.indice++;
       } 
       this.indice=1;
       
       //bebidas
       while(sessionStorage.getItem(`bebida${this.indice}`)){
        let item:any= sessionStorage.getItem(`bebida${this.indice}`)
       
        let itemOk:IItems= JSON.parse(item)
        this.pedido.push(itemOk);
        this.indice++;
       } 
       this.indice=1;
       //postres
       while(sessionStorage.getItem(`postre${this.indice}`)){
        let item:any= sessionStorage.getItem(`postre${this.indice}`)
       
        let itemOk:IItems= JSON.parse(item)
        this.pedido.push(itemOk);
        this.indice++;
       } 
       this.indice=1;

       console.log(this.pedido);
       
    
    }
    eliminarDelPedido(item:IItems){
      let indice = this.pedido.indexOf(item);
      this.pedido.splice(indice,1);

    }
    confirmar(){

      sessionStorage.clear();

      alert('se acaba de confirmar el pedido!, el mismo sera despachado por delivery propio de la Pizaria y debera abonarlo en efectivo!');
      this.router.navigate(['/confirmacion_del_pedido']);
    }
}
