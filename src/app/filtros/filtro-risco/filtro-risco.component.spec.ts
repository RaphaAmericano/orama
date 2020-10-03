import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroRiscoComponent } from './filtro-risco.component';

describe('FiltroRiscoComponent', () => {
  let component: FiltroRiscoComponent;
  let fixture: ComponentFixture<FiltroRiscoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroRiscoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroRiscoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
