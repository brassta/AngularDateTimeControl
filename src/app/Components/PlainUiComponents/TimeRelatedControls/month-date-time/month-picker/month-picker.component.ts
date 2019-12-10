import {Component, Input, OnInit} from '@angular/core';
import {FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {TimeUtilitiesService} from "@components/PlainUiComponents/TimeRelatedControls/time-utilities.service";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";
import {PubsubService} from "@services/PubSub/pubsub.service";

export interface MonthDataObject {
  monthIndex: number;
  monthLongName: string;
  monthShortName: string;
  monthStyleIdentifier?: string;
}

@Component({
  selector: 'agenzzia-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.less']
})
export class MonthPickerComponent implements OnInit {

  @Input() time: FullDateTimeObjectModel;
  months: MonthDataObject[];
  locale:string;

  constructor(private pubSubService: PubsubService) {
  }

  ngOnInit() {
    this.prepareMonthData();
  }

  handleHeaderChanges($event: any) {

  }

  setDateValue(month: MonthDataObject) {
    const tempTime = this.time.value || new Date();
    console.log('click', month);
    tempTime.setMonth(month.monthIndex);
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: tempTime})

  }

  private prepareMonthData() {
    this.locale = this.time.locale;
    this.months = TimeUtilitiesService.getMonthNamesLong(this.locale).map((item: string, index: number) => {
      return {
        monthIndex: index,
        monthLongName: item,
        monthShortName: TimeUtilitiesService.getMonthNamesShort(this.locale)[index],
      }
    })
  }

  private buildMonthData(time) {
    if (UtilitiesService.isExisty(time.value)) {

    } else {
      const tempTime = new Date();
    }
  }

  checkIsActualMonth(month: MonthDataObject) {
    const tempTime = this.time.value || new Date()
    return tempTime.getMonth() === month.monthIndex;
  }
}
