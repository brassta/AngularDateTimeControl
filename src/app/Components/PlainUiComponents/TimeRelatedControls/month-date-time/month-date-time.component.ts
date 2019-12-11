import {Component, Input, OnInit} from '@angular/core';
import {TimeUtilitiesService} from "@components/PlainUiComponents/TimeRelatedControls/time-utilities.service";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {PubsubService, Subscription} from "@services/PubSub/pubsub.service";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";

export enum MonthDateTimeControlModes {ALL = 'All', DATE = 'Date', MONTH = 'Month', TIME = 'Time', DATETIME = 'DateTime'}

export interface FullDateTimeObjectModel {
  value: Date,
  label: string;
  date: number;
  day: number;
  hours: number;
  minutes: number;
  dayNameLong: string;
  dayNameShort: string;
  month: number;
  monthLongName: string;
  monthShortName: string;
  year: number;
  placeholderValue: string;
  realExportValue: string;
  timestamp: number;
  mode: string;
  locale: string;
  timeInputPresentation: string;
}

export interface AdditionalDataModel {
  mode: string,
  inputData: any
}

@Component({
  selector: 'agenzzia-month-date-time',
  templateUrl: './month-date-time.component.html',
  styleUrls: ['./month-date-time.component.less']
})
export class MonthDateTimeComponent implements OnInit {
  @Input() mode: string;
  @Input() inputData: any;
  fullDateTimeObject: FullDateTimeObjectModel;
  timeInputPresentation: any;
  realExportValue: any;
  opened = false;
  dateChangedSubscription: Subscription;

  constructor(private pubsubService: PubsubService) {
  }

  ngOnInit() {
    this.subscribeToDateChangedEvent();
    if (UtilitiesService.isExisty(this.inputData.time)) {
      this.buildFullDateTimeObject(this.inputData.time);
    } else {
      this.buildFullDateTimeObject(null);
    }
  }


  private buildFullDateTimeObject(time: Date) {
    const additionalData: AdditionalDataModel = {
      mode: this.mode,
      inputData: this.inputData,
    }
    this.fullDateTimeObject = TimeUtilitiesService.rebuildTimeObject(time, additionalData)
  }

  timeValueChangedManually($event: FocusEvent) {
    const field = ($event.target as HTMLInputElement);
    let valueToCheck = field.value;
    UtilitiesService.ColorizeLogBlue('uslo', valueToCheck, this.fullDateTimeObject.mode)
    if(this.fullDateTimeObject.mode = MonthDateTimeControlModes.TIME){
      valueToCheck = TimeUtilitiesService.PrepareTimeValueToFullDateTimeFormat(valueToCheck, this.fullDateTimeObject.locale)
      UtilitiesService.ColorizeLogOrange('transformed', valueToCheck)
    }
    if (!isNaN(Date.parse(valueToCheck))) {
      this.buildFullDateTimeObject(new Date(Date.parse(valueToCheck)));
      field.classList.remove('ng-invalid', 'invalid', 'ng-valid');
      field.classList.add('ng-valid');
    } else {
      console.log('nije proslo');
      field.classList.remove('ng-valid', 'ng-invalid');
      field.classList.add('ng-invalid', 'invalid');
    }
  }

  keyUpCalled($event: Event) {

  }


  toggleOpenedModal() {
    this.opened = !this.opened;
  }

  closeModal() {
    this.opened = false;
  }


  private subscribeToDateChangedEvent() {
    this.dateChangedSubscription = this.pubsubService.Subscribe(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, data => {
      this.buildFullDateTimeObject(data.time);
    })
  }
}
