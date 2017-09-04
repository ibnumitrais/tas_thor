import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { enableProdMode } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//COMPONENT
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { PeriodComponent } from './period/period.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { AchievementComponent } from './achievement/achievement.component';
import { TrainingComponent } from './training/training.component';

// SERVICE
import { ModelUserService } from './model-user.service';

enableProdMode();

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    TopMenuComponent,
    SidebarComponent,
    UserComponent,
    HomeComponent,
    PeriodComponent,
    EnrollmentComponent,
    AchievementComponent,
    TrainingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ModelUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
