import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreedsmaxComponent } from './threedsmax.component';

describe('ThreedsmaxComponent', () => {
  let component: ThreedsmaxComponent;
  let fixture: ComponentFixture<ThreedsmaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreedsmaxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreedsmaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
