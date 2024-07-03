import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobdescriptionpageComponent } from './jobdescriptionpage.component';

describe('JobdescriptionpageComponent', () => {
  let component: JobdescriptionpageComponent;
  let fixture: ComponentFixture<JobdescriptionpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobdescriptionpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobdescriptionpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
