import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePComponent } from './home-p.component';

describe('HomePComponent', () => {
  let component: HomePComponent;
  let fixture: ComponentFixture<HomePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
