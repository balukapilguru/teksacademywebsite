import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCourseSidebarComponent } from './single-course-sidebar.component';

describe('SingleCourseSidebarComponent', () => {
  let component: SingleCourseSidebarComponent;
  let fixture: ComponentFixture<SingleCourseSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCourseSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCourseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
