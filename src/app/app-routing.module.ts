import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { ConfirmacionDelPedidoComponent } from './pages/confirmacion-del-pedido/confirmacion-del-pedido.component';
import { VistaDelPedidoComponent } from './pages/vista-del-pedido/vista-del-pedido.component';

const routes: Routes = [
  {path:'menu', component: MenuComponent},
  {path:'vista_del_pedido', component: VistaDelPedidoComponent},
  {path:'confirmacion_del_pedido', component: ConfirmacionDelPedidoComponent},
  {path:'**',  redirectTo: 'menu'},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
