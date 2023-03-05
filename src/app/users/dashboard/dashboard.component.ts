import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {GraphService} from "../../graph.service";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import {Dashboard} from "../../model/dashboard";
import {MatTableDataSource} from "@angular/material/table";
import {Preferred} from "../../model/preferred";

@Component({
  selector: 'ctc-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  messages?: any | MicrosoftGraph.Message[] = new MatTableDataSource();
  trendObject: Preferred[] = [];
  trendOfUser: Preferred[] = [];
  categoryMap: Map<string, number> = new Map();

  pieChartOptions: Dashboard = {
    animationEnabled: true,
    title: {
      text: 'Preferred activities',
    },
    theme: 'light2', // "light1", "dark1", "dark2"
    data: [
      {
        type: 'pie',
        dataPoints:  this.trendObject,
      },
    ],
  };

  constructor(
    private authService: AuthService,
    private graphService: GraphService,
  ) {
  }
  async ngOnInit() {
    this.messages = await this.graphService.getMailMessages();
    if (this.messages) {
      this.setMapCategories();
      let c=0;
      this.categoryMap.forEach((value, key) => {
        const pStore = new Preferred();
        pStore.label = key;
        pStore.y = value;
        this.trendObject[c] = pStore;
        c++;
      })
      console.log(this.pieChartOptions, ' pieChartOptions ', ' then ', this.trendObject)
    }
  }

  private setMapCategories() {
    let clothCount = 0;
    let foodCount = 0;
    let travelCount = 0;
    // @ts-ignore
    this.messages.forEach((val) => {
      if (!val.categories.empty) {
        if (val.categories.some((e: string) => e === "Cloth")) {
          clothCount++;
        } else if (val.categories.some((e: string) => e === "Food")) {
          foodCount++;
        } else if (val.categories.some((e: string) => e === "Travel")) {
          travelCount++;
        }
      }
    });

    this.categoryMap.set("cloth", clothCount);
    this.categoryMap.set("food", foodCount);
    this.categoryMap.set("travel", travelCount);
  }
}
