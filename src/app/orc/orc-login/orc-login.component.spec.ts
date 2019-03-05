import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcLoginComponent } from './orc-login.component';

describe('OrcLoginComponent', () => {
  let component: OrcLoginComponent;
  let fixture: ComponentFixture<OrcLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
