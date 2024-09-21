import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedinComponent } from './featuredin.component';

describe('FeaturedinComponent', () => {
  let component: FeaturedinComponent;
  let fixture: ComponentFixture<FeaturedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
