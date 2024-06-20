import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapsalesdistributionComponent } from './sapsalesdistribution.component';

describe('SapsalesdistributionComponent', () => {
  let component: SapsalesdistributionComponent;
  let fixture: ComponentFixture<SapsalesdistributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapsalesdistributionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapsalesdistributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
