import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusDoComponent } from './plus-do.component';

describe('PlusDoComponent', () => {
  let component: PlusDoComponent;
  let fixture: ComponentFixture<PlusDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusDoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
