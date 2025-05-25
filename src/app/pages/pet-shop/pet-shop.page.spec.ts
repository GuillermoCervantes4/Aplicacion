import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PetShopPage } from './pet-shop.page';

describe('PetShopPage', () => {
  let component: PetShopPage;
  let fixture: ComponentFixture<PetShopPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PetShopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
