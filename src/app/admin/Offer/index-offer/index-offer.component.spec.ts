import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexOfferComponent } from './index-offer.component';

describe('IndexOfferComponent', () => {
  let component: IndexOfferComponent;
  let fixture: ComponentFixture<IndexOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
