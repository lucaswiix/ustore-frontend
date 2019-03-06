import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarumanDashboardComponent } from './saruman-dashboard.component';

describe('SarumanDashboardComponent', () => {
  let component: SarumanDashboardComponent;
  let fixture: ComponentFixture<SarumanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarumanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarumanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
