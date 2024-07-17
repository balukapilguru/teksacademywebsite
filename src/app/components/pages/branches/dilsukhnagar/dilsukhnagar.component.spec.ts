import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilsukhnagarComponent } from './dilsukhnagar.component';

describe('DilsukhnagarComponent', () => {
  let component: DilsukhnagarComponent;
  let fixture: ComponentFixture<DilsukhnagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DilsukhnagarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DilsukhnagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
