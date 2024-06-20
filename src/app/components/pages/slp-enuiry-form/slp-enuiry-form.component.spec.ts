import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpEnuiryFormComponent } from './slp-enuiry-form.component';

describe('SlpEnuiryFormComponent', () => {
  let component: SlpEnuiryFormComponent;
  let fixture: ComponentFixture<SlpEnuiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpEnuiryFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpEnuiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
