import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapproductionplanningComponent } from './sapproductionplanning.component';

describe('SapproductionplanningComponent', () => {
  let component: SapproductionplanningComponent;
  let fixture: ComponentFixture<SapproductionplanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapproductionplanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapproductionplanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
