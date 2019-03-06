import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcProfileComponent } from './orc-profile.component';

describe('OrcProfileComponent', () => {
  let component: OrcProfileComponent;
  let fixture: ComponentFixture<OrcProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
