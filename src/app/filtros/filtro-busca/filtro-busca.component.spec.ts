import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroBuscaComponent } from './filtro-busca.component';

describe('FiltroBuscaComponent', () => {
  let component: FiltroBuscaComponent;
  let fixture: ComponentFixture<FiltroBuscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroBuscaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroBuscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
