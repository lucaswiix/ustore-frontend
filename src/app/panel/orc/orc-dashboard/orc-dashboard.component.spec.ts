import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcDashboardComponent } from './orc-dashboard.component';

describe('OrcDashboardComponent', () => {
  let component: OrcDashboardComponent;
  let fixture: ComponentFixture<OrcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
