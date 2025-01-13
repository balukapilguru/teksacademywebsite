import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitialmarketingguwahatiComponent } from './digitialmarketingguwahati.component';

describe('DigitialmarketingguwahatiComponent', () => {
  let component: DigitialmarketingguwahatiComponent;
  let fixture: ComponentFixture<DigitialmarketingguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitialmarketingguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitialmarketingguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
