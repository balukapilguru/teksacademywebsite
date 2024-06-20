import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforceWebinarComponent } from './salesforce-webinar.component';

describe('SalesforceWebinarComponent', () => {
  let component: SalesforceWebinarComponent;
  let fixture: ComponentFixture<SalesforceWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesforceWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesforceWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
