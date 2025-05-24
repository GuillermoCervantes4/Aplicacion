import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerdidosPage } from './perdidos.page';

describe('PerdidosPage', () => {
  let component: PerdidosPage;
  let fixture: ComponentFixture<PerdidosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
