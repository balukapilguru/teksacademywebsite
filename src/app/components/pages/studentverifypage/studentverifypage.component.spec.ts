import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentverifypageComponent } from './studentverifypage.component';

describe('StudentverifypageComponent', () => {
  let component: StudentverifypageComponent;
  let fixture: ComponentFixture<StudentverifypageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentverifypageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentverifypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
