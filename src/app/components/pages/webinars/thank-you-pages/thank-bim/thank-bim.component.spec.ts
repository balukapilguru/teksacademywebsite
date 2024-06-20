import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankBimComponent } from './thank-bim.component';

describe('ThankBimComponent', () => {
  let component: ThankBimComponent;
  let fixture: ComponentFixture<ThankBimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankBimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankBimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
