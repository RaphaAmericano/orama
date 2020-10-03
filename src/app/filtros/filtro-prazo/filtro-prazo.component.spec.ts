import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPrazoComponent } from './filtro-prazo.component';

describe('FiltroPrazoComponent', () => {
  let component: FiltroPrazoComponent;
  let fixture: ComponentFixture<FiltroPrazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroPrazoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPrazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
