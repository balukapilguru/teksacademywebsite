import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookafreedemoformComponent } from './bookafreedemoform.component';

describe('BookafreedemoformComponent', () => {
  let component: BookafreedemoformComponent;
  let fixture: ComponentFixture<BookafreedemoformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookafreedemoformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookafreedemoformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
