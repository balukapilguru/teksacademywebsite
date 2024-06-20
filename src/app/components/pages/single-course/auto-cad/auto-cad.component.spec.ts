import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCADComponent } from './auto-cad.component';

describe('AutoCADComponent', () => {
  let component: AutoCADComponent;
  let fixture: ComponentFixture<AutoCADComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoCADComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCADComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
