import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpDigitalMarketingComponent } from './slp-digital-marketing.component';

describe('SlpDigitalMarketingComponent', () => {
  let component: SlpDigitalMarketingComponent;
  let fixture: ComponentFixture<SlpDigitalMarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpDigitalMarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpDigitalMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
