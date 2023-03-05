// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Injectable } from '@angular/core';
import * as MicrosoftGraph from '@microsoft/microsoft-graph-types';

import { AuthService } from './auth.service';
import { AlertsService } from './alerts.service';
import {MailFolder, Message} from "@microsoft/microsoft-graph-types";

@Injectable({
  providedIn: 'root',
})
export class GraphService {
  constructor(
    private authService: AuthService,
    private alertsService: AlertsService
  ) {}

  async getCalendarView(
    start: string,
    end: string,
    timeZone: string
  ): Promise<MicrosoftGraph.Event[] | undefined> {
    if (!this.authService.graphClient) {
      this.alertsService.addError('Graph client is not initialized.');
      return undefined;
    }

    try {
      // GET /me/calendarview?startDateTime=''&endDateTime=''
      // &$select=subject,organizer,start,end
      // &$orderby=start/dateTime
      // &$top=50
      const result = await this.authService.graphClient
        .api('/me/calendarview')
        .header('Prefer', `outlook.timezone="${timeZone}"`)
        .query({
          startDateTime: start,
          endDateTime: end,
        })
        .select('subject,organizer,start,end')
        .orderby('start/dateTime')
        .top(50)
        .get();

      return result.value;
    } catch (error) {
      this.alertsService.addError(
        'Could not get events',
        JSON.stringify(error, null, 2)
      );
    }
    return undefined;
  }

  async addEventToCalendar(newEvent: MicrosoftGraph.Event): Promise<void> {
    if (!this.authService.graphClient) {
      this.alertsService.addError('Graph client is not initialized.');
      return undefined;
    }

    try {
      // POST /me/events
      await this.authService.graphClient.api('/me/events').post(newEvent);
    } catch (error) {
      throw Error(JSON.stringify(error, null, 2));
    }
  }

  async getMailMessages(): Promise<MicrosoftGraph.Message[] | undefined>{
    if (!this.authService.graphClient) {
      this.alertsService.addError('Graph client is not initialized.');
      return undefined;
    }
    try {
      // GET /me/messages
      // &$select=subject,organizer,start,end
      // &$orderby=sentDateTime
      // &$top=50
      const result = await this.authService.graphClient
        .api('/me/messages')
        .select('subject,isRead, sender, categories')
        .orderby('sentDateTime')
        .top(50)
        .get();

      return result.value;
    } catch (error) {
      this.alertsService.addError(
        'Could not get mail items',
        JSON.stringify(error, null, 2)
      );
    }
    return undefined;
  }
}
