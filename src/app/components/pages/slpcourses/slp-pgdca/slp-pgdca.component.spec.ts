import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpPgdcaComponent } from './slp-pgdca.component';

describe('SlpPgdcaComponent', () => {
  let component: SlpPgdcaComponent;
  let fixture: ComponentFixture<SlpPgdcaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpPgdcaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpPgdcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
