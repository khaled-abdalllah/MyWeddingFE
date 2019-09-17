import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveOfferComponent } from './save-offer.component';

describe('SaveOfferComponent', () => {
  let component: SaveOfferComponent;
  let fixture: ComponentFixture<SaveOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
