import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet2Page } from './pet2.page';

describe('Pet2Page', () => {
  let component: Pet2Page;
  let fixture: ComponentFixture<Pet2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
