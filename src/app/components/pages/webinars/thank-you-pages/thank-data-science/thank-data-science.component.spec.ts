import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankDataScienceComponent } from './thank-data-science.component';

describe('ThankDataScienceComponent', () => {
  let component: ThankDataScienceComponent;
  let fixture: ComponentFixture<ThankDataScienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankDataScienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankDataScienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
