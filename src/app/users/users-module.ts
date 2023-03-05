import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {AppRoutingModule} from "../app-routing.module";
import {PreferenceComponent} from "./preferences/preference.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./calendar/calendar.component";
import {FormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {SharedModule} from "../shared/shared-module";
import {MatTabsModule} from "@angular/material/tabs";
import * as CanvasJSAngularChart from '@';
var CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;
@NgModule({
  declarations: [
    DashboardComponent,
    PreferenceComponent,
    CalendarComponent,
    CanvasJSChart
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        FormsModule,
        MatTableModule,
        MatProgressSpinnerModule,
        SharedModule,
        MatTabsModule
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
