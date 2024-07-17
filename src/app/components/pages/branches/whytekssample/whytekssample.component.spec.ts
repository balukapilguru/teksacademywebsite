import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhytekssampleComponent } from './whytekssample.component';

describe('WhytekssampleComponent', () => {
  let component: WhytekssampleComponent;
  let fixture: ComponentFixture<WhytekssampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhytekssampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhytekssampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
