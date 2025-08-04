import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftTrainingComponent } from './soft-training.component';

describe('SoftTrainingComponent', () => {
  let component: SoftTrainingComponent;
  let fixture: ComponentFixture<SoftTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SoftTrainingComponent]
    });
    fixture = TestBed.createComponent(SoftTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
