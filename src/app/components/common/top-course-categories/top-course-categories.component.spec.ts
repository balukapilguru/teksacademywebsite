import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCourseCategoriesComponent } from './top-course-categories.component';

describe('TopCourseCategoriesComponent', () => {
  let component: TopCourseCategoriesComponent;
  let fixture: ComponentFixture<TopCourseCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCourseCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCourseCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
