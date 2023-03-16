import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDelPedidoComponent } from './vista-del-pedido.component';

describe('VistaDelPedidoComponent', () => {
  let component: VistaDelPedidoComponent;
  let fixture: ComponentFixture<VistaDelPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaDelPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaDelPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
