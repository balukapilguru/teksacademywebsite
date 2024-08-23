import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VizagComponent } from './vizag.component';

describe('VizagComponent', () => {
  let component: VizagComponent;
  let fixture: ComponentFixture<VizagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VizagComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VizagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
