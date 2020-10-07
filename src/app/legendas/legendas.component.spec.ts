import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendasComponent } from './legendas.component';

describe('LegendasComponent', () => {
  let component: LegendasComponent;
  let fixture: ComponentFixture<LegendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
