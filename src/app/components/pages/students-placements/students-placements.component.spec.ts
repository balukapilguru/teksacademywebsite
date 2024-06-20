import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPlacementsComponent } from './students-placements.component';

describe('StudentsPlacementsComponent', () => {
  let component: StudentsPlacementsComponent;
  let fixture: ComponentFixture<StudentsPlacementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPlacementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
