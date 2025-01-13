import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonguwahatiComponent } from './pythonguwahati.component';

describe('PythonguwahatiComponent', () => {
  let component: PythonguwahatiComponent;
  let fixture: ComponentFixture<PythonguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PythonguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PythonguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
