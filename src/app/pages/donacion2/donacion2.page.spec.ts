import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Donacion2Page } from './donacion2.page';

describe('Donacion2Page', () => {
  let component: Donacion2Page;
  let fixture: ComponentFixture<Donacion2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Donacion2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
