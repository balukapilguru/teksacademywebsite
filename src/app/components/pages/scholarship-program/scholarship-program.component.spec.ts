import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholarshipProgramComponent } from './scholarship-program.component';

describe('ScholarshipProgramComponent', () => {
  let component: ScholarshipProgramComponent;
  let fixture: ComponentFixture<ScholarshipProgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholarshipProgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScholarshipProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
