import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerritoPage } from './perrito.page';

describe('PerritoPage', () => {
  let component: PerritoPage;
  let fixture: ComponentFixture<PerritoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
