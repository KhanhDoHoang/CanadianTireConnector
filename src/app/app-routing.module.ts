import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from '@azure/msal-angular';
import {DashboardComponent} from "./users/dashboard/dashboard.component";
import {PreferenceComponent} from "./users/preferences/preference.component";
import {CalendarComponent} from "./users/calendar/calendar.component";

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'users',
    component: PreferenceComponent
  },
  {
    path: 'users/calendar',
    component: CalendarComponent
  },
  {
    path: 'users/dashboard',
    component: DashboardComponent
  },
  {
    // Needed for Error routing
    path: 'error',
    component: HomeComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    // Don't perform initial navigation in iframes
    initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
