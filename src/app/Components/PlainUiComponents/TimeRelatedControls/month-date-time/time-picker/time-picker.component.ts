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
  divider: string;
  amPmDayPartRepresentation: string;
  timeInputPresentation: string;


  @Input() time: FullDateTimeObjectModel;
  label: string;
  formData: any;
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
    this.amPmDayPartRepresentation = tempTime.getHours() > 12 ? 'PM' : 'AM';
  }


  changeValue(definition: string, direction: string) {
    let tempTime = this.time.value || new Date();
    switch (definition) {
      case 'hours':
        if (direction === 'up') {
          tempTime.setHours(tempTime.getHours() + 1);
        } else {
          tempTime.setHours(tempTime.getHours() - 1);
        }
        break;
      case 'minutes':
        if (direction === 'up') {
          tempTime.setMinutes(tempTime.getMinutes() + 1);
        } else {
          tempTime.setMinutes(tempTime.getMinutes() - 1);
        }
        break;
      case 'ampm':
        if (direction === 'up') {
          tempTime.setHours(tempTime.getHours() + 12);
        } else {
          tempTime.setHours(tempTime.getHours() - 12);
        }
    }
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime})

  }


  rebuildHours(hours: number) {
    return ((hours + 11) % 12 + 1);
  }
}
