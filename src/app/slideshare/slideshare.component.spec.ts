import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideshareComponent } from './slideshare.component';

describe('SlideshareComponent', () => {
  let component: SlideshareComponent;
  let fixture: ComponentFixture<SlideshareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlideshareComponent]
    });
    fixture = TestBed.createComponent(SlideshareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
