import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatascienceguwahatiComponent } from './datascienceguwahati.component';

describe('DatascienceguwahatiComponent', () => {
  let component: DatascienceguwahatiComponent;
  let fixture: ComponentFixture<DatascienceguwahatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatascienceguwahatiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatascienceguwahatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
