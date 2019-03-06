import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllSoldiersComponent } from './all-soldiers.component';

describe('AllSoldiersComponent', () => {
  let component: AllSoldiersComponent;
  let fixture: ComponentFixture<AllSoldiersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSoldiersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllSoldiersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
