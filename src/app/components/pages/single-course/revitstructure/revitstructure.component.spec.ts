import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevitstructureComponent } from './revitstructure.component';

describe('RevitstructureComponent', () => {
  let component: RevitstructureComponent;
  let fixture: ComponentFixture<RevitstructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevitstructureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevitstructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
