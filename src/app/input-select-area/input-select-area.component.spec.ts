import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectAreaComponent } from './input-select-area.component';

describe('InputSelectAreaComponent', () => {
  let component: InputSelectAreaComponent;
  let fixture: ComponentFixture<InputSelectAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
