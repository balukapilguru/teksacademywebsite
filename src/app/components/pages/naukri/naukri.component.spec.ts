import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaukriComponent } from './naukri.component';

describe('NaukriComponent', () => {
  let component: NaukriComponent;
  let fixture: ComponentFixture<NaukriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaukriComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaukriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
