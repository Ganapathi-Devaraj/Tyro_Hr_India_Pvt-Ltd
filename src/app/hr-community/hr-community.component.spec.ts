import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCommunityComponent } from './hr-community.component';

describe('HrCommunityComponent', () => {
  let component: HrCommunityComponent;
  let fixture: ComponentFixture<HrCommunityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrCommunityComponent]
    });
    fixture = TestBed.createComponent(HrCommunityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
