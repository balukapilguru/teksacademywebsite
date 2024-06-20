import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAboutusComponent } from './course-aboutus.component';

describe('CourseAboutusComponent', () => {
  let component: CourseAboutusComponent;
  let fixture: ComponentFixture<CourseAboutusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseAboutusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
