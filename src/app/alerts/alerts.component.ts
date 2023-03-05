import { Component } from '@angular/core';
import { AlertsService } from '../alerts.service';
import {Alert} from "../model/alerts";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../shared/dialog/dialog.component";

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['alerts.component.css'],
})
export class AlertsComponent {
  constructor(public dialog: MatDialog,
              public alertsService: AlertsService) {}
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  close(alert: Alert) {
    this.alertsService.remove(alert);
  }
}
