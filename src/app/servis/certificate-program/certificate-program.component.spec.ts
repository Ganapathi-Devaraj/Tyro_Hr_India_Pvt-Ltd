import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateProgramComponent } from './certificate-program.component';

describe('CertificateProgramComponent', () => {
  let component: CertificateProgramComponent;
  let fixture: ComponentFixture<CertificateProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CertificateProgramComponent]
    });
    fixture = TestBed.createComponent(CertificateProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
