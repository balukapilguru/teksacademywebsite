import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HitechComponent } from './hitech.component';

describe('HitechComponent', () => {
  let component: HitechComponent;
  let fixture: ComponentFixture<HitechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HitechComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HitechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
