import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet5Page } from './pet5.page';

describe('Pet5Page', () => {
  let component: Pet5Page;
  let fixture: ComponentFixture<Pet5Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
