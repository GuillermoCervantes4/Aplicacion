import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApadrinarPage } from './apadrinar.page';

describe('ApadrinarPage', () => {
  let component: ApadrinarPage;
  let fixture: ComponentFixture<ApadrinarPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApadrinarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
