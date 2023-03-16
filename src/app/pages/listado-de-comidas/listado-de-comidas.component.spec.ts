import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDeComidasComponent } from './listado-de-comidas.component';

describe('ListadoDeComidasComponent', () => {
  let component: ListadoDeComidasComponent;
  let fixture: ComponentFixture<ListadoDeComidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoDeComidasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoDeComidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
