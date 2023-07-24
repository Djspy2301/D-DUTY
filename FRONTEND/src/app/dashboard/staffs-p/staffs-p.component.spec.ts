import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffsPComponent } from './staffs-p.component';

describe('StaffsPComponent', () => {
  let component: StaffsPComponent;
  let fixture: ComponentFixture<StaffsPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaffsPComponent]
    });
    fixture = TestBed.createComponent(StaffsPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
