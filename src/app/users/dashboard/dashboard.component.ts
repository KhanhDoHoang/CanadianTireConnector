import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {GraphService} from "../../graph.service";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import {Dashboard} from "../../model/dashboard";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'ctc-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  messages?: any | MicrosoftGraph.Message[] = new MatTableDataSource();


  pieChartOptions: Dashboard = {
    animationEnabled: true,
    title: {
      text: 'Preferred location',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'pie',
        dataPoints: this.messages,
      },
    ],
  };


  constructor(
    private authService: AuthService,
    private graphService: GraphService,
  ) {}

  async ngOnInit() {
    this.messages = await this.graphService.getMailMessages();
    console.log(this.messages, ' messages ')
  }
}
