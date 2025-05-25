import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filtro2Page } from './filtro2.page';

describe('Filtro2Page', () => {
  let component: Filtro2Page;
  let fixture: ComponentFixture<Filtro2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Filtro2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
