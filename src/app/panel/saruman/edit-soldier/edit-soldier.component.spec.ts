import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSoldierComponent } from './edit-soldier.component';

describe('EditSoldierComponent', () => {
  let component: EditSoldierComponent;
  let fixture: ComponentFixture<EditSoldierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSoldierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSoldierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
