import { TestBed } from '@angular/core/testing';

import { MyCalendarService } from './my-calendar.service';

describe('MyCalendarService', () => {
  let service: MyCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
