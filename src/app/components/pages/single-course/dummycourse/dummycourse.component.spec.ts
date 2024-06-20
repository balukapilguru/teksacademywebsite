import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummycourseComponent } from './dummycourse.component';

describe('DummycourseComponent', () => {
  let component: DummycourseComponent;
  let fixture: ComponentFixture<DummycourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummycourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DummycourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
