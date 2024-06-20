import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentialCoursesComponent } from './essential-courses.component';

describe('EssentialCoursesComponent', () => {
  let component: EssentialCoursesComponent;
  let fixture: ComponentFixture<EssentialCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentialCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EssentialCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
