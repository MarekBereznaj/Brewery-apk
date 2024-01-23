import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import { BreweryCityPage } from './brewery-city.page';

describe('BreweryCityPage', () => {
  let component: BreweryCityPage;
  let fixture: ComponentFixture<BreweryCityPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BreweryCityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
