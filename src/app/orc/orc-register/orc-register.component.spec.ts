import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcRegisterComponent } from './orc-register.component';

describe('OrcRegisterComponent', () => {
  let component: OrcRegisterComponent;
  let fixture: ComponentFixture<OrcRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
