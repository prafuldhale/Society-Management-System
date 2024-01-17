import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestiveCalendarComponent } from './festive-calendar.component';

describe('FestiveCalendarComponent', () => {
  let component: FestiveCalendarComponent;
  let fixture: ComponentFixture<FestiveCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestiveCalendarComponent]
    });
    fixture = TestBed.createComponent(FestiveCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
