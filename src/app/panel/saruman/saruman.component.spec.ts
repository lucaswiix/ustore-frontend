import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarumanComponent } from './saruman.component';

describe('SarumanComponent', () => {
  let component: SarumanComponent;
  let fixture: ComponentFixture<SarumanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarumanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
