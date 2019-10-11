import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesBlockComponent } from './messages-block.component';

describe('MessagesBlockComponent', () => {
  let component: MessagesBlockComponent;
  let fixture: ComponentFixture<MessagesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
