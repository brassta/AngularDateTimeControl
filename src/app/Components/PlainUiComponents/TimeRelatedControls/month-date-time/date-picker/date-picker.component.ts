import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {TimeUtilitiesService} from "@components/PlainUiComponents/TimeRelatedControls/time-utilities.service";
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {DateMonthHeaderComponent, DateMonthHeaderData} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/date-month-header/date-month-header.component";
import {FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";
import {PubsubService} from "@services/PubSub/pubsub.service";
import {ConstantsPubSub} from "@constants/Messages/PubSub/pubsub-constants";
import {MonthDataObject} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-picker/month-picker.component";



interface DayObject {
  value: number;
  monthData: MonthDataObject;
}

enum MonthPossibleValues {previous = 'previous', current = 'current', next = 'next'}

@Component({
  selector: 'agenzzia-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.less']
})
export class DatePickerComponent implements OnInit, OnChanges {

  @Input() time: FullDateTimeObjectModel;
  // @Output() newDate = new EventEmitter();
  days: DayObject[] = [];
  currentMonthIndex: number;
  currentMonthNameLong: string;
  currentMonthNameShort: string;
  previousMonthNameLong: string;
  previousMonthNameShort: string;
  nextMonthNameLong: string;
  nextMonthNameShort: string;
  lastDayOfMonth: number;

  constructor(private pubSubService: PubsubService) {
  }

  ngOnInit() {
    this.prepareDateData();
  }

  private prepareDateData() {
    if (UtilitiesService.isExisty(this.time)) {
      this.buildDateData(this.time);
    } else {
      this.buildDateData(null)
    }

  }

  private buildDateData(time: FullDateTimeObjectModel) {
    if(UtilitiesService.isExisty(time.value)){
      this.currentMonthIndex = time.value.getMonth();
      this.lastDayOfMonth = new Date(time.value.getFullYear(), time.value.getMonth() + 1, 0).getDate();

      this.currentMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex];
      this.currentMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex];

      this.previousMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex - 1];
      this.previousMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex - 1];

      this.nextMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex + 1 === 12 ? 0 : this.currentMonthIndex + 1];
      this.nextMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex + 1 === 12 ? 0 : this.currentMonthIndex + 1];

      UtilitiesService.ColorizeLogYellow();
      UtilitiesService.ColorizeLogYellow();
      console.log(this.currentMonthNameLong, this.nextMonthNameLong, this.previousMonthNameLong);
      const daysValuesList = TimeUtilitiesService.buildCalendarMatrix(this.time.value);
      this.days = daysValuesList.map((item, index) => {
        return {
          value: item,
          monthData: this.buildCorrespondingMonthIndex(item, index)
        }
      })
    }else{
      const tempTime = new Date();
      this.currentMonthIndex = tempTime.getMonth();
      this.lastDayOfMonth = new Date(tempTime.getFullYear(), tempTime.getMonth() + 1, 0).getDate();

      this.currentMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex];
      this.currentMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex];

      this.previousMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex - 1];
      this.previousMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex - 1];

      this.nextMonthNameLong = TimeUtilitiesService.getMonthNamesLong()[this.currentMonthIndex + 1 === 12 ? 0 : this.currentMonthIndex + 1];
      this.nextMonthNameShort = TimeUtilitiesService.getMonthNamesShort()[this.currentMonthIndex + 1 === 12 ? 0 : this.currentMonthIndex + 1];

      UtilitiesService.ColorizeLogYellow();
      UtilitiesService.ColorizeLogYellow();
      console.log(this.currentMonthNameLong, this.nextMonthNameLong, this.previousMonthNameLong);
      const daysValuesList = TimeUtilitiesService.buildCalendarMatrix(tempTime);
      this.days = daysValuesList.map((item, index) => {
        return {
          value: item,
          monthData: this.buildCorrespondingMonthIndex(item, index)
        }
      })
    }

    console.log(this.days);
  }

  private buildCorrespondingMonthIndex(item: any, index: number): MonthDataObject {
    if (index < 15 && item > 15) {
      return { //this month
        monthIndex: this.currentMonthIndex - 1,
        monthLongName: this.previousMonthNameLong,
        monthShortName: this.previousMonthNameShort,
        monthStyleIdentifier: MonthPossibleValues.previous
      };
    } else if (index > this.lastDayOfMonth && item < 10) {
      return { //next month
        monthIndex: this.currentMonthIndex + 1,
        monthLongName: this.nextMonthNameLong,
        monthShortName: this.nextMonthNameShort,
        monthStyleIdentifier: MonthPossibleValues.next

      };
    } else {
      return { //current
        monthIndex: this.currentMonthIndex,
        monthLongName: this.currentMonthNameLong,
        monthShortName: this.currentMonthNameShort,
        monthStyleIdentifier: MonthPossibleValues.current
      }
    }
  }

  setDateValue(date: DayObject) {
    console.log(date);
    const currentDate = this.time.value || new Date();
    currentDate.setMonth(date.monthData.monthIndex);
    currentDate.setDate(date.value);
    console.log(currentDate);
    this.pubSubService.Publish(ConstantsPubSub.PS_DATE_TIME_VALUE_CHANGED, {time: currentDate})
    this.prepareDateData();

  }

  public checkIsActualDate(value: number) {
    return this.time.date === value;
  }

  handleHeaderChanges($event: DateMonthHeaderData) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.prepareDateData();
  }
}
