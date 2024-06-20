import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackpythonComponent } from './fullstackpython.component';

describe('FullstackpythonComponent', () => {
  let component: FullstackpythonComponent;
  let fixture: ComponentFixture<FullstackpythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullstackpythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullstackpythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
