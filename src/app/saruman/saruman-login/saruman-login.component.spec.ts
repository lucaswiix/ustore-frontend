import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarumanLoginComponent } from './saruman-login.component';

describe('SarumanLoginComponent', () => {
  let component: SarumanLoginComponent;
  let fixture: ComponentFixture<SarumanLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarumanLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarumanLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
