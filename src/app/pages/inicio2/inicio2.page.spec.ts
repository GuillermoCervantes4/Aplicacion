import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Inicio2Page } from './inicio2.page';

describe('Inicio2Page', () => {
  let component: Inicio2Page;
  let fixture: ComponentFixture<Inicio2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Inicio2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
