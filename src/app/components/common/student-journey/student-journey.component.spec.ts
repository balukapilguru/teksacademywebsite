import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJourneyComponent } from './student-journey.component';

describe('StudentJourneyComponent', () => {
  let component: StudentJourneyComponent;
  let fixture: ComponentFixture<StudentJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
