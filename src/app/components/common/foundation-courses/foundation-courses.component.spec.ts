import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundationCoursesComponent } from './foundation-courses.component';

describe('FoundationCoursesComponent', () => {
  let component: FoundationCoursesComponent;
  let fixture: ComponentFixture<FoundationCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoundationCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoundationCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
