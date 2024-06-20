import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullStackWebinarComponent } from './full-stack-webinar.component';

describe('FullStackWebinarComponent', () => {
  let component: FullStackWebinarComponent;
  let fixture: ComponentFixture<FullStackWebinarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullStackWebinarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullStackWebinarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
