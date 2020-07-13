import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent }  from './home/home.component';
import { HeaderComponent }  from './header/header.component';
import { AboutComponent }  from './about/about.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserSidebarComponent } from './users/user-sidebar/user-sidebar.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';


const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent, 
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent, HomeComponent, LoginComponent, 
    HeaderComponent, AboutComponent, SidebarComponent,
    UserSidebarComponent, UserHeaderComponent, 
    UserDashboardComponent, UserHomeComponent, AdminDashboardComponent, AdminHeaderComponent, AdminSidebarComponent, AdminHomeComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
