import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankMedicalCodingComponent } from './thank-medical-coding.component';

describe('ThankMedicalCodingComponent', () => {
  let component: ThankMedicalCodingComponent;
  let fixture: ComponentFixture<ThankMedicalCodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankMedicalCodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankMedicalCodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
