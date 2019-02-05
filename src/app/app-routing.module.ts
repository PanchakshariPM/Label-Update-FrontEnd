import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ConflictsComponent } from './conflicts/conflicts.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LabelInfoComponent } from './label-info/label-info.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent,
    children: [
      {
        path: 'create',
        component: CreateComponent
      },
      {
        path: 'main',
        component: HomeComponent
      },
      {
        path: 'label-info',
        component: LabelInfoComponent
      },
      {
        path: 'conflicts',
        component: ConflictsComponent
      },
      {
        path: 'header',
        component: HeaderComponent
      },
      {
        path: 'menu',
        component: MenuComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
