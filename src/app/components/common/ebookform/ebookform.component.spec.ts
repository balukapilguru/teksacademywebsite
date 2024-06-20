import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbookformComponent } from './ebookform.component';

describe('EbookformComponent', () => {
  let component: EbookformComponent;
  let fixture: ComponentFixture<EbookformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EbookformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EbookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
