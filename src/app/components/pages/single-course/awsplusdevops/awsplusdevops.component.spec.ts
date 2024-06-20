import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsplusdevopsComponent } from './awsplusdevops.component';

describe('AwsplusdevopsComponent', () => {
  let component: AwsplusdevopsComponent;
  let fixture: ComponentFixture<AwsplusdevopsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwsplusdevopsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwsplusdevopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
