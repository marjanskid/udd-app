import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoSpacingResultsComponent } from './geo-spacing-results.component';

describe('GeoSpacingResultsComponent', () => {
  let component: GeoSpacingResultsComponent;
  let fixture: ComponentFixture<GeoSpacingResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoSpacingResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoSpacingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
