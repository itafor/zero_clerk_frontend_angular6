import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserSidebarComponent } from './users/user-sidebar/user-sidebar.component';
import { UserHeaderComponent } from './users/user-header/user-header.component';
import { UserDashboardComponent } from './users/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './users/user-home/user-home.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { LoginComponent } from './homePage/login/login.component';
import { SignupComponent } from './homePage/signup/signup.component';
import { RequestPasswordResetComponent } from './homePage/password/request-password-reset/request-password-reset.component';
import { RespondPasswordResetComponent } from './homePage/password/respond-password-reset/respond-password-reset.component';
import { SubscriptionPlanComponent } from './homePage/subscription-plan/subscription-plan.component';
import { HomeComponent } from './homePage/home/home.component';
import { NavbarComponent } from './homePage/navbar/navbar.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TokenInterceptorService } from './services/token-interceptor.service';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'home', component: HomeComponent},
  { path: 'user/dashboard', component: UserDashboardComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,UserSidebarComponent, UserHeaderComponent, 
    UserDashboardComponent, UserHomeComponent, AdminDashboardComponent, AdminHeaderComponent, AdminSidebarComponent, AdminHomeComponent, LoginComponent, SignupComponent, RequestPasswordResetComponent, RespondPasswordResetComponent, SubscriptionPlanComponent, HomeComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,  RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClientModule,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
