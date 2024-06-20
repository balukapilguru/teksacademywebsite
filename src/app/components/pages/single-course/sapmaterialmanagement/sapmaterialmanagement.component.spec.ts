import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapmaterialmanagementComponent } from './sapmaterialmanagement.component';

describe('SapmaterialmanagementComponent', () => {
  let component: SapmaterialmanagementComponent;
  let fixture: ComponentFixture<SapmaterialmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapmaterialmanagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapmaterialmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
