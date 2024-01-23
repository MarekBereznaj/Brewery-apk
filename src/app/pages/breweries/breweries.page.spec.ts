import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { BreweriesPage } from './breweries.page';

describe('BreweriesPage', () => {
  let component: BreweriesPage;
  let fixture: ComponentFixture<BreweriesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BreweriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
