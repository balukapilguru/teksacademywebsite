import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitMepComponent } from './revit-mep.component';

describe('RevitMepComponent', () => {
  let component: RevitMepComponent;
  let fixture: ComponentFixture<RevitMepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevitMepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevitMepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
