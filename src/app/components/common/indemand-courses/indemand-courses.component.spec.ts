import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndemandCoursesComponent } from './indemand-courses.component';

describe('IndemandCoursesComponent', () => {
  let component: IndemandCoursesComponent;
  let fixture: ComponentFixture<IndemandCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndemandCoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndemandCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
