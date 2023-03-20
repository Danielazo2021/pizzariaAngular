import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { EmpanadasComponent } from './components/empanadas/empanadas.component';
import { BebidasComponent } from './components/bebidas/bebidas.component';
import { PostreComponent } from './components/postre/postre.component';


import { ConfirmacionDelPedidoComponent } from './pages/confirmacion-del-pedido/confirmacion-del-pedido.component';
import { VistaDelPedidoComponent } from './pages/vista-del-pedido/vista-del-pedido.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PizzasComponent,
    EmpanadasComponent,
    BebidasComponent,
    PostreComponent,
    
    ConfirmacionDelPedidoComponent,
    VistaDelPedidoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
