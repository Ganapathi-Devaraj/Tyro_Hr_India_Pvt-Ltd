import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCounsellingComponent } from './career-counselling.component';

describe('CareerCounsellingComponent', () => {
  let component: CareerCounsellingComponent;
  let fixture: ComponentFixture<CareerCounsellingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CareerCounsellingComponent]
    });
    fixture = TestBed.createComponent(CareerCounsellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
