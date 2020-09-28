import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundosHeaderComponent } from './fundos-header.component';

describe('FundosHeaderComponent', () => {
  let component: FundosHeaderComponent;
  let fixture: ComponentFixture<FundosHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundosHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FundosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
