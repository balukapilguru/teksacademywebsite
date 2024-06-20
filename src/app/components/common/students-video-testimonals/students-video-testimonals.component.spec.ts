import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsVideoTestimonalsComponent } from './students-video-testimonals.component';

describe('StudentsVideoTestimonalsComponent', () => {
  let component: StudentsVideoTestimonalsComponent;
  let fixture: ComponentFixture<StudentsVideoTestimonalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsVideoTestimonalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsVideoTestimonalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
