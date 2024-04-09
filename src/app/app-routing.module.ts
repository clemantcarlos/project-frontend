import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomePersonalComponent } from './home-personal/home-personal.component';
import { loginHomeGuard } from './guards/login/login-home.guard';
import { Page404Component } from './page404/page404.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { ConfigComponent } from './config/config.component';
import { ReportsComponent } from './reports/reports.component';
const routes: Routes = [
  {
    path:'users/user/:id',
    component:UserComponent
  },
  {
    path:'users/:id',
    component:UserComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'reports',
    component:ReportsComponent,
    canActivate:[loginHomeGuard]
  },
  {
    path:'config',
    component:ConfigComponent,
    canActivate:[loginHomeGuard]
  },
  {
    path:'home',
    component:HomePersonalComponent,
    canActivate:[loginHomeGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path:'404',
    component:Page404Component
  },
  {
    path:'**',
    redirectTo:'404',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
