import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet1Page } from './pet1.page';

describe('Pet1Page', () => {
  let component: Pet1Page;
  let fixture: ComponentFixture<Pet1Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
