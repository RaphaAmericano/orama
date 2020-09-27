import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaFundosComponent } from './lista-fundos.component';

describe('ListaFundosComponent', () => {
  let component: ListaFundosComponent;
  let fixture: ComponentFixture<ListaFundosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaFundosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaFundosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
