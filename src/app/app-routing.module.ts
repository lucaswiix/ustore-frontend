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
          { path: '', component: OrcDashboardComponent }
    ]
  },
  {
    path: 'saruman-panel',
    component: SarumanComponent,
    children: [
      {
        path: '',
        children: [
          { path: '', component: SarumanDashboardComponent}
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

