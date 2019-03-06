import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LoginOverviewComponent } from './login-overview/login-overview.component';
import { OrcLoginComponent } from './orc/orc-login/orc-login.component';
import { OrcRegisterComponent } from './orc/orc-register/orc-register.component';
import { SarumanLoginComponent } from './saruman/saruman-login/saruman-login.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { OrcComponent } from './panel/orc/orc/orc.component';
import { OrcDashboardComponent } from './panel/orc/orc-dashboard/orc-dashboard.component';
import { SarumanComponent } from './panel/saruman/saruman/saruman.component';
import { SarumanDashboardComponent } from './panel/saruman/saruman-dashboard/saruman-dashboard.component';
import { OrcProfileComponent } from './panel/orc/orc-profile/orc-profile.component';
import { SoldiersComponent } from './panel/saruman/soldiers/soldiers.component';
import { OrdersComponent } from './panel/saruman/orders/orders.component';
import { MessagesComponent } from './panel/saruman/messages/messages.component';
import { StaticsComponent } from './panel/saruman/statics/statics.component';
import { AllOrdersComponent } from './panel/saruman/all-orders/all-orders.component';
import { NewOrderComponent } from './panel/saruman/new-order/new-order.component';
import { AllMessagesComponent } from './panel/saruman/all-messages/all-messages.component';
import { NewMessageComponent } from './panel/saruman/new-message/new-message.component';
import { EditSoldierComponent } from './panel/saruman/edit-soldier/edit-soldier.component';
import { AllSoldiersComponent } from './panel/saruman/all-soldiers/all-soldiers.component';


const routes: Routes = [
  {
    path: '',
    component: FirstComponentComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'orc/login', component: OrcLoginComponent },
          { path: 'orc/register', component: OrcRegisterComponent },
          { path: 'saruman/login', component: SarumanLoginComponent },
          { path: '', component: LoginOverviewComponent }
        ]
      }
    ]
  },
  {
    path: 'orc-panel',
    component: OrcComponent,
    children: [
          { path: '', component: OrcDashboardComponent },
          { path: 'profile', component: OrcProfileComponent }
    ]
  },
  {
    path: 'saruman-panel',
    component: SarumanComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: SarumanDashboardComponent},
          { 
            path: 'soldiers', 
            component: SoldiersComponent,
            children: [
              {path:'', component: AllSoldiersComponent},
              {path:'edit/:id', component: EditSoldierComponent },
              {path:'**', redirectTo: '/saruman-panel/soldiers'}
            ]
          },
          { 
            path: 'orders', 
            component: OrdersComponent,
            children: [
              {
                path: '',
                children: [
                {path:'', component: AllOrdersComponent},
                {path: 'new-order', component: NewOrderComponent},
                {path:'**', redirectTo: '/panel-saruman/orders'}   
              ]
              }         
            ]
          },
          { 
            path: 'messages', 
            component: MessagesComponent,
            children: [
              {path:'', component: AllMessagesComponent},
              {path:'new-message', component: NewMessageComponent},
              {path:'**', redirectTo: '/panel-saruman/messages'}

            ]
          },
          { path: 'statics', component: StaticsComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [OrcComponent, OrcDashboardComponent, FirstComponentComponent, LoginOverviewComponent, OrcLoginComponent, SarumanLoginComponent, OrcRegisterComponent];

