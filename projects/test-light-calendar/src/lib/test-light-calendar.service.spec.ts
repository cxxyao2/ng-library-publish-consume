import { TestBed } from '@angular/core/testing';

import { TestLightCalendarService } from './test-light-calendar.service';

describe('TestLightCalendarService', () => {
  let service: TestLightCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestLightCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
