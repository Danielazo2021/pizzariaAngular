import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmacionDelPedidoComponent } from './confirmacion-del-pedido.component';

describe('ConfirmacionDelPedidoComponent', () => {
  let component: ConfirmacionDelPedidoComponent;
  let fixture: ComponentFixture<ConfirmacionDelPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmacionDelPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmacionDelPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
