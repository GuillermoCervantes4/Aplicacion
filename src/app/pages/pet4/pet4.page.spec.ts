import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet4Page } from './pet4.page';

describe('Pet4Page', () => {
  let component: Pet4Page;
  let fixture: ComponentFixture<Pet4Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
