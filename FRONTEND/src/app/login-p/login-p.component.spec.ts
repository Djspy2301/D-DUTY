import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPComponent } from './login-p.component';

describe('LoginPComponent', () => {
  let component: LoginPComponent;
  let fixture: ComponentFixture<LoginPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
