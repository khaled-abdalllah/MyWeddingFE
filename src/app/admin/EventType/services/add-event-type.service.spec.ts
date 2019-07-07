import { TestBed } from '@angular/core/testing';

import { AddEventTypeService } from './add-event-type.service';

describe('AddEventTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEventTypeService = TestBed.get(AddEventTypeService);
    expect(service).toBeTruthy();
  });
});
