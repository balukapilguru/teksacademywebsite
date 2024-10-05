import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VlsiComponent } from './vlsi.component';

describe('VlsiComponent', () => {
  let component: VlsiComponent;
  let fixture: ComponentFixture<VlsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VlsiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VlsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
