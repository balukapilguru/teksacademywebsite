import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecunderabadComponent } from './secunderabad.component';

describe('SecunderabadComponent', () => {
  let component: SecunderabadComponent;
  let fixture: ComponentFixture<SecunderabadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecunderabadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecunderabadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
