import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseFormComponent } from './single-course-form.component';

describe('SingleCourseFormComponent', () => {
  let component: SingleCourseFormComponent;
  let fixture: ComponentFixture<SingleCourseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourseFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCourseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
