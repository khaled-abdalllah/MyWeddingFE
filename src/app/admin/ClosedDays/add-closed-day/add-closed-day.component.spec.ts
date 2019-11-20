import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClosedDayComponent } from './add-closed-day.component';

describe('AddClosedDayComponent', () => {
  let component: AddClosedDayComponent;
  let fixture: ComponentFixture<AddClosedDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClosedDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClosedDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
