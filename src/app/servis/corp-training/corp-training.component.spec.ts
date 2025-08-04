import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpTrainingComponent } from './corp-training.component';

describe('CorpTrainingComponent', () => {
  let component: CorpTrainingComponent;
  let fixture: ComponentFixture<CorpTrainingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorpTrainingComponent]
    });
    fixture = TestBed.createComponent(CorpTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
