import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TimeUtilitiesService} from "@components/PlainUiComponents/TimeRelatedControls/time-utilities.service";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {PubsubService, Subscription} from "@services/PubSub/pubsub.service";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";

export enum MonthDateTimeControlModes {All = 'All', Date = 'Date', Month = 'Month', Time = 'Time'}

export interface FullDateTimeObjectModel {
  value: Date,
  label: string;
  date: number;
  day: number;
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
export class MonthDateTimeComponent implements OnInit, OnChanges {
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change change');
  }

  private buildFullDateTimeObject(time: Date) {
    const additionalData: AdditionalDataModel = {
      mode: this.mode,
      inputData: this.inputData,
    }
    this.fullDateTimeObject = TimeUtilitiesService.rebuildTimeObject(time, additionalData)
  }

  timeValueChangedManually($event: FocusEvent) {

  }

  keyUpCalled($event: Event) {

  }



  toggleOpenedModal() {
    console.log('vidimo se ovde');
    this.opened = !this.opened;
  }

  closeModal() {
    this.opened = false;
  }




  private subscribeToDateChangedEvent() {
    this.dateChangedSubscription = this.pubsubService.Subscribe(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, data => {
      console.log('ikad ovo jebiga', data);
      this.buildFullDateTimeObject(data.time);
    })
  }
}
