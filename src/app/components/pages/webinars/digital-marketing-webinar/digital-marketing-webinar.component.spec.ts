import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketingWebinarComponent } from './digital-marketing-webinar.component';

describe('DigitalMarketingWebinarComponent', () => {
  let component: DigitalMarketingWebinarComponent;
  let fixture: ComponentFixture<DigitalMarketingWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalMarketingWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketingWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
