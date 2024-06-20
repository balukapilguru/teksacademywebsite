import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpOverviewFormComponent } from './slp-overview-form.component';

describe('SlpOverviewFormComponent', () => {
  let component: SlpOverviewFormComponent;
  let fixture: ComponentFixture<SlpOverviewFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlpOverviewFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlpOverviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
