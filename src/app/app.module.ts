import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginOverviewComponent } from './login-overview/login-overview.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';
import {DemoMaterialModule} from '../material-module';
import { OrcRegisterComponent } from './orc/orc-register/orc-register.component';
import { InputSelectGroupComponent } from './input-select-group/input-select-group.component';
import { InputSelectAreaComponent } from './input-select-area/input-select-area.component';
import { OrcComponent } from './panel/orc/orc.component';
import { SarumanComponent } from './panel/saruman/saruman.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    LoginOverviewComponent,
    OrcRegisterComponent,
    InputSelectGroupComponent,
    InputSelectAreaComponent,
    OrcComponent,
    SarumanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    DemoMaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
