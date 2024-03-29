import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBlockComponent } from './create-block.component';

describe('CreateChatComponent', () => {
  let component: CreateBlockComponent;
  let fixture: ComponentFixture<CreateBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
