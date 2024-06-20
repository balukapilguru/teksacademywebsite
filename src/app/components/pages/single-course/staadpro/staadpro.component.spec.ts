import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaadproComponent } from './staadpro.component';

describe('StaadproComponent', () => {
  let component: StaadproComponent;
  let fixture: ComponentFixture<StaadproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaadproComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaadproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
