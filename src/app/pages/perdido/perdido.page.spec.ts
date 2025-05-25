import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerdidoPage } from './perdido.page';

describe('PerdidoPage', () => {
  let component: PerdidoPage;
  let fixture: ComponentFixture<PerdidoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PerdidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
