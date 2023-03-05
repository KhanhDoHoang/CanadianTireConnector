import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {PreferenceComponent} from "./preferences/preference.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  declarations: [
    DashboardComponent,
    PreferenceComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MatTableModule,
    MatProgressSpinnerModule
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
