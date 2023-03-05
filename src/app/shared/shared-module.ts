import {NgModule} from '@angular/core';
import {DialogComponent} from "./dialog/dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {KeywordStatusPipe} from "./pipe/KeywordStatusPipe";

@NgModule({
  declarations: [
    DialogComponent,
    KeywordStatusPipe
  ],
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  exports: [KeywordStatusPipe],
  bootstrap: []
})
export class SharedModule { }
