import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaguwahatiComponent } from './javaguwahati.component';

describe('JavaguwahatiComponent', () => {
  let component: JavaguwahatiComponent;
  let fixture: ComponentFixture<JavaguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
