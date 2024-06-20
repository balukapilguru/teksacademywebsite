import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalcodingComponent } from './medicalcoding.component';

describe('MedicalcodingComponent', () => {
  let component: MedicalcodingComponent;
  let fixture: ComponentFixture<MedicalcodingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalcodingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalcodingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
