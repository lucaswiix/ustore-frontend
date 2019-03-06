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
import { OrcProfileComponent } from './panel/orc/orc-profile/orc-profile.component';
import { SarumanDashboardComponent } from './panel/saruman/saruman-dashboard/saruman-dashboard.component';
import { SarumanComponent } from './panel/saruman/saruman/saruman.component';
import { OrcComponent } from './panel/orc/orc/orc.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SoldiersComponent } from './panel/saruman/soldiers/soldiers.component';
import { OrdersComponent } from './panel/saruman/orders/orders.component';
import { MessagesComponent } from './panel/saruman/messages/messages.component';
import { StaticsComponent } from './panel/saruman/statics/statics.component';
import { AllOrdersComponent } from './panel/saruman/all-orders/all-orders.component';
import { NewOrderComponent } from './panel/saruman/new-order/new-order.component';
import { InputSelectSoldiersComponent } from './input-select-soldiers/input-select-soldiers.component';
import { AllMessagesComponent } from './panel/saruman/all-messages/all-messages.component';
import { NewMessageComponent } from './panel/saruman/new-message/new-message.component';
import { EditSoldierComponent } from './panel/saruman/edit-soldier/edit-soldier.component';
import { AllSoldiersComponent } from './panel/saruman/all-soldiers/all-soldiers.component';


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
    OrcProfileComponent,
    SarumanDashboardComponent,
    SarumanComponent,
    OrcComponent,
    SoldiersComponent,
    OrdersComponent,
    MessagesComponent,
    StaticsComponent,
    AllOrdersComponent,
    NewOrderComponent,
    InputSelectSoldiersComponent,
    AllMessagesComponent,
    NewMessageComponent,
    EditSoldierComponent,
    AllSoldiersComponent,
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
