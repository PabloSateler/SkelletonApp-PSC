import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MiscursosPage } from './miscursos.page';

describe('MiscursosPage', () => {
  let component: MiscursosPage;
  let fixture: ComponentFixture<MiscursosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MiscursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
