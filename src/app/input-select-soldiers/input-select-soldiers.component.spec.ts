import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectSoldiersComponent } from './input-select-soldiers.component';

describe('InputSelectSoldiersComponent', () => {
  let component: InputSelectSoldiersComponent;
  let fixture: ComponentFixture<InputSelectSoldiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputSelectSoldiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputSelectSoldiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
