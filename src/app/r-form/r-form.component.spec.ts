import { ComponentFixture, TestBed } from '@angular/core/testing';


import { RFormComponent } from './r-form.component';

describe('RFormComponent', () => {
  let component: RFormComponent;
  let fixture: ComponentFixture<RFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RFormComponent]
    });
    fixture = TestBed.createComponent(RFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
