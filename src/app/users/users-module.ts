import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {PreferenceComponent} from "./preferences/preference.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";

@NgModule({
  declarations: [
    DashboardComponent,
    PreferenceComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    DashboardComponent,
    PreferenceComponent,
    CalendarComponent
  ],
  bootstrap: []
})
export class UsersModule { }
