import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreLikeThisResultsComponent } from './more-like-this-results.component';

describe('MoreLikeThisResultsComponent', () => {
  let component: MoreLikeThisResultsComponent;
  let fixture: ComponentFixture<MoreLikeThisResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreLikeThisResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreLikeThisResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
