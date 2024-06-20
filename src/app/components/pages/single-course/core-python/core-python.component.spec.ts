import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorePythonComponent } from './core-python.component';

describe('CorePythonComponent', () => {
  let component: CorePythonComponent;
  let fixture: ComponentFixture<CorePythonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorePythonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorePythonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
