import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLightCalendarComponent } from './test-light-calendar.component';

describe('TestLightCalendarComponent', () => {
  let component: TestLightCalendarComponent;
  let fixture: ComponentFixture<TestLightCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLightCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLightCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
