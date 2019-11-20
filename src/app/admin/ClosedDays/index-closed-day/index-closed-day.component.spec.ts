import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexClosedDayComponent } from './index-closed-day.component';

describe('IndexClosedDayComponent', () => {
  let component: IndexClosedDayComponent;
  let fixture: ComponentFixture<IndexClosedDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexClosedDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexClosedDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
