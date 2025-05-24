import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Donacion1Page } from './donacion1.page';

describe('Donacion1Page', () => {
  let component: Donacion1Page;
  let fixture: ComponentFixture<Donacion1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Donacion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
