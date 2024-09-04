import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DmpageComponent } from './dmpage.component';

describe('DmpageComponent', () => {
  let component: DmpageComponent;
  let fixture: ComponentFixture<DmpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DmpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DmpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
