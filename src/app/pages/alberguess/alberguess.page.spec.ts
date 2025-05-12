import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlberguessPage } from './alberguess.page';

describe('AlberguessPage', () => {
  let component: AlberguessPage;
  let fixture: ComponentFixture<AlberguessPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberguessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
