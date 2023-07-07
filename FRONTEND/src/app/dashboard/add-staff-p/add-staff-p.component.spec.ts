import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStaffPComponent } from './add-staff-p.component';

describe('AddStaffPComponent', () => {
  let component: AddStaffPComponent;
  let fixture: ComponentFixture<AddStaffPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddStaffPComponent]
    });
    fixture = TestBed.createComponent(AddStaffPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
