import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrMeetupsComponent } from './hr-meetups.component';

describe('HrMeetupsComponent', () => {
  let component: HrMeetupsComponent;
  let fixture: ComponentFixture<HrMeetupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrMeetupsComponent]
    });
    fixture = TestBed.createComponent(HrMeetupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
