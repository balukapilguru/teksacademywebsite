import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchenquiryformComponent } from './branchenquiryform.component';

describe('BranchenquiryformComponent', () => {
  let component: BranchenquiryformComponent;
  let fixture: ComponentFixture<BranchenquiryformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchenquiryformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BranchenquiryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
