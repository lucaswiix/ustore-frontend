import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcNavbarComponent } from './orc-navbar.component';

describe('OrcNavbarComponent', () => {
  let component: OrcNavbarComponent;
  let fixture: ComponentFixture<OrcNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
