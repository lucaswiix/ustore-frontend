import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarumanNavbarComponent } from './saruman-navbar.component';

describe('SarumanNavbarComponent', () => {
  let component: SarumanNavbarComponent;
  let fixture: ComponentFixture<SarumanNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarumanNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarumanNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
