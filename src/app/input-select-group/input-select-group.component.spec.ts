import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectGroupComponent } from './input-select-group.component';

describe('InputSelectGroupComponent', () => {
  let component: InputSelectGroupComponent;
  let fixture: ComponentFixture<InputSelectGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
