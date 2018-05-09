import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewrepoComponent } from './newrepo.component';

describe('NewrepoComponent', () => {
  let component: NewrepoComponent;
  let fixture: ComponentFixture<NewrepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewrepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewrepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
