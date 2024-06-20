import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankDigitalMarketingComponent } from './thank-digital-marketing.component';

describe('ThankDigitalMarketingComponent', () => {
  let component: ThankDigitalMarketingComponent;
  let fixture: ComponentFixture<ThankDigitalMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankDigitalMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
