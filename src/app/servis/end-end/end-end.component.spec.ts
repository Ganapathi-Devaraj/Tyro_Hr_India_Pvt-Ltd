import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndEndComponent } from './end-end.component';

describe('EndEndComponent', () => {
  let component: EndEndComponent;
  let fixture: ComponentFixture<EndEndComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndEndComponent]
    });
    fixture = TestBed.createComponent(EndEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
