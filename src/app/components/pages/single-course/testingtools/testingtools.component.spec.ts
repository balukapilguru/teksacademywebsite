import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingtoolsComponent } from './testingtools.component';

describe('TestingtoolsComponent', () => {
  let component: TestingtoolsComponent;
  let fixture: ComponentFixture<TestingtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestingtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
