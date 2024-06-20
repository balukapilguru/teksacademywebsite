import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankSalesforceComponent } from './thank-salesforce.component';

describe('ThankSalesforceComponent', () => {
  let component: ThankSalesforceComponent;
  let fixture: ComponentFixture<ThankSalesforceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankSalesforceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankSalesforceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
