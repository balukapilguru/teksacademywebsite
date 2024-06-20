import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyTeksComponent } from './why-teks.component';

describe('WhyTeksComponent', () => {
  let component: WhyTeksComponent;
  let fixture: ComponentFixture<WhyTeksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyTeksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyTeksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
