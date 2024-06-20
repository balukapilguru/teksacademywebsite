import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcodingWebinarComponent } from './medicalcoding-webinar.component';

describe('MedicalcodingWebinarComponent', () => {
  let component: MedicalcodingWebinarComponent;
  let fixture: ComponentFixture<MedicalcodingWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcodingWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalcodingWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
