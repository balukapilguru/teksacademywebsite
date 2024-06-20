import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpCoursesComponent } from './slp-courses.component';

describe('SlpCoursesComponent', () => {
  let component: SlpCoursesComponent;
  let fixture: ComponentFixture<SlpCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
