import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrcLoginComponent } from './orc/orc-login/orc-login.component';
import { SarumanLoginComponent } from './saruman/saruman-login/saruman-login.component';
import { LoginOverviewComponent } from './login-overview/login-overview.component';
import { OrcRegisterComponent } from './orc/orc-register/orc-register.component';


const routes: Routes = [
  {path: '', component: LoginOverviewComponent},
  {path: 'orc/login', component: OrcLoginComponent},
  {path: 'orc/register', component: OrcRegisterComponent},
  {path: 'saruman/login', component: SarumanLoginComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [LoginOverviewComponent, OrcLoginComponent, SarumanLoginComponent];

