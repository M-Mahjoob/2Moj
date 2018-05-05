import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlusDoerComponent } from './plus-doer.component';

describe('PlusDoerComponent', () => {
  let component: PlusDoerComponent;
  let fixture: ComponentFixture<PlusDoerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlusDoerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlusDoerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
