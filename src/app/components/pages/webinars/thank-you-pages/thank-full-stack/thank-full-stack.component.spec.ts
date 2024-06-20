import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankFullStackComponent } from './thank-full-stack.component';

describe('ThankFullStackComponent', () => {
  let component: ThankFullStackComponent;
  let fixture: ComponentFixture<ThankFullStackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankFullStackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankFullStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
