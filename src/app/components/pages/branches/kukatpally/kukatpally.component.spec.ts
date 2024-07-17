import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KukatpallyComponent } from './kukatpally.component';

describe('KukatpallyComponent', () => {
  let component: KukatpallyComponent;
  let fixture: ComponentFixture<KukatpallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KukatpallyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KukatpallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
