import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexItemsComponent } from './index-items.component';

describe('IndexItemsComponent', () => {
  let component: IndexItemsComponent;
  let fixture: ComponentFixture<IndexItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
