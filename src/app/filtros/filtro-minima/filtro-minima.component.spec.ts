import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroMinimaComponent } from './filtro-minima.component';

describe('FiltroMinimaComponent', () => {
  let component: FiltroMinimaComponent;
  let fixture: ComponentFixture<FiltroMinimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroMinimaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroMinimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
