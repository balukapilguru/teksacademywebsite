import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmeerpetComponent } from './ameerpet.component';

describe('AmeerpetComponent', () => {
  let component: AmeerpetComponent;
  let fixture: ComponentFixture<AmeerpetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmeerpetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmeerpetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
