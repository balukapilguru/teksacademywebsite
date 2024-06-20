import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullstackjavaComponent } from './fullstackjava.component';

describe('FullstackjavaComponent', () => {
  let component: FullstackjavaComponent;
  let fixture: ComponentFixture<FullstackjavaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullstackjavaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullstackjavaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
