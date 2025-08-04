import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventOrgComponent } from './event-org.component';

describe('EventOrgComponent', () => {
  let component: EventOrgComponent;
  let fixture: ComponentFixture<EventOrgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventOrgComponent]
    });
    fixture = TestBed.createComponent(EventOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
