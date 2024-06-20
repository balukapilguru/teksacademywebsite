import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsAppFormComponent } from './whats-app-form.component';

describe('WhatsAppFormComponent', () => {
  let component: WhatsAppFormComponent;
  let fixture: ComponentFixture<WhatsAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsAppFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
