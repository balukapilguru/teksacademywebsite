import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollnowformComponent } from './enrollnowform.component';

describe('EnrollnowformComponent', () => {
  let component: EnrollnowformComponent;
  let fixture: ComponentFixture<EnrollnowformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollnowformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollnowformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
