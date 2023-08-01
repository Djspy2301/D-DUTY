import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSchedulePComponent } from './time-schedule-p.component';

describe('TimeSchedulePComponent', () => {
  let component: TimeSchedulePComponent;
  let fixture: ComponentFixture<TimeSchedulePComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeSchedulePComponent]
    });
    fixture = TestBed.createComponent(TimeSchedulePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
