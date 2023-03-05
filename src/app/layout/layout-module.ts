import {NgModule} from '@angular/core';
import {TopbarComponent} from './topbar/topbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CommonModule} from '@angular/common';
import {AppRoutingModule} from '../app-routing.module';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    TopbarComponent
  ],
  imports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    CommonModule,
    AppRoutingModule,
    MatMenuModule
  ],
  providers: [],
  exports: [
    TopbarComponent
  ],
  bootstrap: []
})
export class LayoutModule { }
