import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualtestingComponent } from './manualtesting.component';

describe('ManualtestingComponent', () => {
  let component: ManualtestingComponent;
  let fixture: ComponentFixture<ManualtestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualtestingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualtestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
