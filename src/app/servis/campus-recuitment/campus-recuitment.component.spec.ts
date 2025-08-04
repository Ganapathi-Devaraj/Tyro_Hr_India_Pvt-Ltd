import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusRecuitmentComponent } from './campus-recuitment.component';

describe('CampusRecuitmentComponent', () => {
  let component: CampusRecuitmentComponent;
  let fixture: ComponentFixture<CampusRecuitmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampusRecuitmentComponent]
    });
    fixture = TestBed.createComponent(CampusRecuitmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
