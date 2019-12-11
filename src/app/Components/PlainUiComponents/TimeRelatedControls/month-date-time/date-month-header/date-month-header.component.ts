import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TimeParser} from "@components/PlainUiComponents/TimeRelatedControls/time-parser";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {TimeUtilitiesService} from "@components/PlainUiComponents/TimeRelatedControls/time-utilities.service";
import {FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";
import {PubsubService} from "@services/PubSub/pubsub.service";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";

export interface DateMonthHeaderData {
  month: number;
  year: number;
}

@Component({
  selector: 'agenzzia-time-header',
  templateUrl: './date-month-header.component.html',
  styleUrls: ['./date-month-header.component.less']
})
export class DateMonthHeaderComponent implements OnInit {

  @Input() time: FullDateTimeObjectModel;
  @Output() headerValueChanged = new EventEmitter();
  timeValue: Date;
  locale: string;
  mode: string;
  label: string;
  monthFull: string;
  monthShort: string;
  monhNumberRepresentaiton: number;
  year: number;
  yearNumberRepresentation: number;

  constructor(private timeParser: TimeParser, private pubSubService: PubsubService) {
  }

  ngOnInit() {
    this.prepareValuesForDisplaying();
  }

  private prepareValuesForDisplaying() {
    this.timeValue = this.time.value || new Date();
    this.locale = this.time.locale;
    this.label = this.time.label;
    this.mode = this.time.mode;
    this.monthFull = this.time.monthLongName;
    // this.monthShort = this.time.toLocaleString('default', {month: 'short'});
    this.monthShort = this.time.monthShortName;
    this.monhNumberRepresentaiton = this.time.month;
    this.year = this.time.year;
    this.yearNumberRepresentation = this.time.year;
  }

  titleChanged($event: Event, mode: string) {
    const tempTime = this.timeValue || new Date();
    const enteredValue = ($event.target as HTMLInputElement).innerHTML;
    if (mode === 'Month') {
      if (TimeUtilitiesService.getMonthNamesLong().includes(enteredValue)) {
        const tempMonthIndex = TimeUtilitiesService.getMonthNamesLong().indexOf(enteredValue);
        tempTime.setMonth(tempMonthIndex);
        this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime});
      }
    } else if (mode === 'Year') {
      tempTime.setFullYear(+enteredValue)
      this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime});
    }
  }

  getActualMonthIndexByName(enteredValue: string) {
    return TimeUtilitiesService.getMonthNamesLong().indexOf(enteredValue.charAt(0).toUpperCase() + enteredValue.slice(1));
  }

  checkValidInputOfMonthName(enteredValue: string) {
    return TimeUtilitiesService.getMonthNamesLong().includes(enteredValue);
  }

  changeHeaderValue(target: string, direction: string) {
    const tempTime = this.timeValue || new Date();
    let currentYear;
    let currentMonth;
    switch (target) {
      case 'Year':
        switch (direction) {
          case 'Prev':
            currentYear = tempTime.getFullYear();
            currentYear--;
            tempTime.setFullYear(currentYear);
            break;
          case 'Next':
            currentYear = tempTime.getFullYear();
            currentYear++;
            tempTime.setFullYear(currentYear);
            break;
        }
        break;
      case 'Month':
        switch (direction) {
          case 'Prev':
            currentMonth = tempTime.getMonth();
            currentMonth--;
            tempTime.setMonth(currentMonth);
            break;
          case 'Next':
            currentMonth = tempTime.getMonth();
            currentMonth++;
            tempTime.setMonth(currentMonth)
            break;
        }
        break;

    }
    console.log('ovde', tempTime);
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime});
  }

  resetValuesOfHeader() {
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: new Date()});

  }
}
