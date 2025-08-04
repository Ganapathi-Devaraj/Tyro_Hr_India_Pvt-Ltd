import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardshipComponent } from './stewardship.component';

describe('StewardshipComponent', () => {
  let component: StewardshipComponent;
  let fixture: ComponentFixture<StewardshipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StewardshipComponent]
    });
    fixture = TestBed.createComponent(StewardshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
