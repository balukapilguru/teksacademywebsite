import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SapficoComponent } from './sapfico.component';

describe('SapficoComponent', () => {
  let component: SapficoComponent;
  let fixture: ComponentFixture<SapficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SapficoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SapficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
