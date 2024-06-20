import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceExcelComponent } from './advance-excel.component';

describe('AdvanceExcelComponent', () => {
  let component: AdvanceExcelComponent;
  let fixture: ComponentFixture<AdvanceExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceExcelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvanceExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
