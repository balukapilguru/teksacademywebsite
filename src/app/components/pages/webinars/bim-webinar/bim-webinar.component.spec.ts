import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimWebinarComponent } from './bim-webinar.component';

describe('BimWebinarComponent', () => {
  let component: BimWebinarComponent;
  let fixture: ComponentFixture<BimWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
