import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pet3Page } from './pet3.page';

describe('Pet3Page', () => {
  let component: Pet3Page;
  let fixture: ComponentFixture<Pet3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Pet3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
