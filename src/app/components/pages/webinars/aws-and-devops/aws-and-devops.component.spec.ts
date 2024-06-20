import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsAndDevopsComponent } from './aws-and-devops.component';

describe('AwsAndDevopsComponent', () => {
  let component: AwsAndDevopsComponent;
  let fixture: ComponentFixture<AwsAndDevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsAndDevopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsAndDevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
