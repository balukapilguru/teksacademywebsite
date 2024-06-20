import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiandmlComponent } from './aiandml.component';

describe('AiandmlComponent', () => {
  let component: AiandmlComponent;
  let fixture: ComponentFixture<AiandmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiandmlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AiandmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
