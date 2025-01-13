import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsguwahatiComponent } from './awsguwahati.component';

describe('AwsguwahatiComponent', () => {
  let component: AwsguwahatiComponent;
  let fixture: ComponentFixture<AwsguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
