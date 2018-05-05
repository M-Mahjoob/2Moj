import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusIdeaComponent } from './plus-idea.component';

describe('PlusIdeaComponent', () => {
  let component: PlusIdeaComponent;
  let fixture: ComponentFixture<PlusIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
