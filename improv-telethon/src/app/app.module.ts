import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassSignUpComponent } from './class-sign-up/class-sign-up.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ScholarshipComponent } from './scholarship/scholarship.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ClassSignUpComponent,
    ScheduleComponent,
    SponsorsComponent,
    NavBarComponent,
    ScholarshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
