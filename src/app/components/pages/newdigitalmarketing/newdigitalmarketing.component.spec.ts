import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewdigitalmarketingComponent } from './newdigitalmarketing.component';

describe('NewdigitalmarketingComponent', () => {
  let component: NewdigitalmarketingComponent;
  let fixture: ComponentFixture<NewdigitalmarketingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewdigitalmarketingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewdigitalmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
