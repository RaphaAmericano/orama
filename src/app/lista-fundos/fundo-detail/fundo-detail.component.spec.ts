import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundoDetailComponent } from './fundo-detail.component';

describe('FundoDetailComponent', () => {
  let component: FundoDetailComponent;
  let fixture: ComponentFixture<FundoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
