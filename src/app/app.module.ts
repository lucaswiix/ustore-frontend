import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginOverviewComponent } from './login-overview/login-overview.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule} from '@angular/material';
import {DemoMaterialModule} from '../material-module';
import { OrcRegisterComponent } from './orc/orc-register/orc-register.component';
import { InputSelectGroupComponent } from './input-select-group/input-select-group.component';
import { InputSelectAreaComponent } from './input-select-area/input-select-area.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { OrcDashboardComponent } from './panel/orc/orc-dashboard/orc-dashboard.component';
import { OrcNavbarComponent } from './panel/orc/orc-navbar/orc-navbar.component';
import { OrcProfileComponent } from './panel/orc/orc-profile/orc-profile.component';
import { SarumanDashboardComponent } from './panel/saruman/saruman-dashboard/saruman-dashboard.component';
import { SarumanNavbarComponent } from './panel/saruman/saruman-navbar/saruman-navbar.component';
import { SarumanComponent } from './panel/saruman/saruman/saruman.component';
import { OrcComponent } from './panel/orc/orc/orc.component';
import { LayoutModule } from '@angular/cdk/layout';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LoginOverviewComponent,
    OrcRegisterComponent,
    InputSelectGroupComponent,
    InputSelectAreaComponent,
    FirstComponentComponent,
    OrcDashboardComponent,
    OrcNavbarComponent,
    OrcProfileComponent,
    SarumanDashboardComponent,
    SarumanNavbarComponent,
    SarumanComponent,
    OrcComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
