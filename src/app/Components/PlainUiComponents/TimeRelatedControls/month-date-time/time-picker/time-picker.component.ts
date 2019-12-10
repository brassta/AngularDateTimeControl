// -----------------------------------------------------------------------
// <copyright file="time-picker.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Component, Input, OnInit} from '@angular/core';
import {possibleTimeModesEnum, TimeParser} from "@components/PlainUiComponents/TimeRelatedControls/time-parser";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";
import {PubsubService} from "@services/PubSub/pubsub.service";

export enum Directions {
  up,
  down,
  left,
  right
}

export enum Definitions {
  hours, minutes, ampm
}


@Component({
  selector: 'agenzzia-time-picker',
  templateUrl: './time-picker.component.html',
  styleUrls: ['./time-picker.component.less']
})
export class TimePickerComponent implements OnInit {
  hours: number;
  divider: string;
  minutes: number;
  amPmDayPartRepresentation: string;
  timeInputPresentation: string;


  @Input() time: FullDateTimeObjectModel;
  label: string;
  formData: any;
  realExportValue: Date;
  needAMPM: boolean;


  constructor(private timeParser: TimeParser, private pubSubService: PubsubService) {
  }

  ngOnInit() {
    let tempTime: Date;
    if (UtilitiesService.isExisty(this.time.value)) {
      tempTime = this.time.value;
    } else {
      tempTime = new Date();
    }
    this.needAMPM = this.time.locale === 'en';
    this.hours = tempTime.getHours();
    this.minutes = tempTime.getMinutes();
    this.amPmDayPartRepresentation = this.hours > 12 ? 'PM' : 'AM';
  }


  changeValue(definition: string, direction: string) {
    let tempTime = this.time.value || new Date();
    switch (definition) {
      case 'hours':
        if (direction === 'up') {
          this.hours++;
          tempTime = this.timeParser.rebuildTime(tempTime, this.hours, this.minutes);
        } else {
          this.hours--;
          tempTime = this.timeParser.rebuildTime(tempTime, this.hours, this.minutes);
        }
        break;
      case 'minutes':
        if (direction === 'up') {
          this.minutes++;
          tempTime = this.timeParser.rebuildTime(tempTime, this.hours, this.minutes);
        } else {
          this.minutes--;
          tempTime = this.timeParser.rebuildTime(tempTime, this.hours, this.minutes);
        }
        break;
      case 'ampm':
        if (this.amPmDayPartRepresentation === 'AM') {
          this.hours += 12;
        } else {
          this.hours -= 12;
        }
        tempTime = this.timeParser.rebuildTime(tempTime, this.hours, this.minutes);
        this.amPmDayPartRepresentation = this.amPmDayPartRepresentation === 'AM' ? 'PM' : 'AM';
    }
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime})

  }


  rebuildHours(hours: number) {
    return ((hours + 11) % 12 + 1);
  }
}
