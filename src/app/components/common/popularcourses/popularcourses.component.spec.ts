import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularcoursesComponent } from './popularcourses.component';

describe('PopularcoursesComponent', () => {
  let component: PopularcoursesComponent;
  let fixture: ComponentFixture<PopularcoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularcoursesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularcoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
