import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankAwsDevopsComponent } from './thank-aws-devops.component';

describe('ThankAwsDevopsComponent', () => {
  let component: ThankAwsDevopsComponent;
  let fixture: ComponentFixture<ThankAwsDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankAwsDevopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankAwsDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
