import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlberguePage } from './albergue.page';

describe('AlberguePage', () => {
  let component: AlberguePage;
  let fixture: ComponentFixture<AlberguePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
