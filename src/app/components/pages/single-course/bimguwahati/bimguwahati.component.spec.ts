import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimguwahatiComponent } from './bimguwahati.component';

describe('BimguwahatiComponent', () => {
  let component: BimguwahatiComponent;
  let fixture: ComponentFixture<BimguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
