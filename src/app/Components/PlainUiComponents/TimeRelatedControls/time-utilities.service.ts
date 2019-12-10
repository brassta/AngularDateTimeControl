import {Injectable} from '@angular/core';
import {UtilitiesService} from "@services/Utilities/utilities.service";
import {AdditionalDataModel, FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";
import {possibleTimeModesEnum} from "@components/PlainUiComponents/TimeRelatedControls/time-parser";
import {MonthDataObject} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-picker/month-picker.component";

export enum PossibleContolModes {
  'DATE' = 'Date',
  'MONTH' = 'Month',
  'TIME' = 'Time',
  'DATETIME' = 'DateTime'
}

@Injectable({
  providedIn: 'root'
})
export class TimeUtilitiesService {

  constructor() {
  }


  public static getMonthNamesLong(locale = 'en'): string[] {
    switch (locale) {
      case 'en':
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      case 'de':
        return ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      default:
        return ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
  }

  public static getMonthNamesShort(locale = 'en'): string[] {
    switch (locale) {
      case 'en':
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      case 'de':
        return ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
      default:
        return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    }
  }

  public static getDayNamesLong(locale: string = 'en'): string[] {
    switch (locale) {
      case 'en':
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
      case 'de':
        return ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
      default:
        return ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    }
  }

  public static getDayNamesShort(locale: string = 'en'): string[] {
    switch (locale) {
      case 'en':
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
      case 'de':
        return ['Son', 'Mon', 'Die', 'Mit', 'Don', 'Fre', 'Sam'];
      default:
        return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    }
  }

  public static buildCalendarMatrix(time: Date) {
    const year = time.getFullYear();
    const month = time.getMonth();
    const firstDayOfMonth = new Date(year, month, 1).getDay() || 7;
    const days = [];
    for (let i = 1 - firstDayOfMonth; i < (43 - firstDayOfMonth); i++) {
      let dateValue = new Date(year, month, i + 1).getDate();
      days.push(dateValue);
    }
    return days
  }

  public static rebuildTimeObject(time: Date, additionalData?: AdditionalDataModel) {
    let fullDateTimeObject: FullDateTimeObjectModel;
    const locale = additionalData ? additionalData.inputData.locale : 'en';
    const mode = additionalData ? additionalData.mode : 'Date';
    UtilitiesService.ColorizeLogGreen('mode', additionalData, mode, locale)
    const label = additionalData ? additionalData.inputData.label : '';

    if (UtilitiesService.isExisty(time)) {
      const monthIndex = time.getMonth();
      const dayIndex = time.getDay();
      const monthLongName = TimeUtilitiesService.getMonthNamesLong(locale)[monthIndex];
      const monthShortName = TimeUtilitiesService.getMonthNamesShort(locale)[monthIndex];
      const dayNameLong = TimeUtilitiesService.getDayNamesLong(locale)[dayIndex];
      const dayNameShort = TimeUtilitiesService.getDayNamesShort(locale)[dayIndex];
      const date = time.getDate();
      const year = time.getFullYear();


      fullDateTimeObject = Object.assign({}, {
        value: time,
        label,
        date,
        day: dayIndex,
        dayNameLong,
        dayNameShort,
        month: monthIndex,
        monthLongName,
        monthShortName,
        year,
        mode,
        locale,
        placeholderValue: TimeUtilitiesService.setPlaceholder(locale, mode),
        realExportValue: time.toString(),
        timestamp: time.getTime(),
        timeInputPresentation: this.buildTimeInputPresentation(time, {monthLongName, monthShortName, monthIndex}, mode, locale)
      })
    } else {
      const tempTime = new Date();
      const monthIndex = tempTime.getMonth();
      const dayIndex = tempTime.getDay();
      const monthLongName = TimeUtilitiesService.getMonthNamesLong(locale)[monthIndex];
      const monthShortName = TimeUtilitiesService.getMonthNamesShort(locale)[monthIndex];
      const dayNameLong = TimeUtilitiesService.getDayNamesLong(locale)[dayIndex];
      const dayNameShort = TimeUtilitiesService.getDayNamesShort(locale)[dayIndex];
      const date = tempTime.getDate();
      const year = tempTime.getFullYear();
      fullDateTimeObject = Object.assign({}, {
        value: time,
        label,
        date,
        day: dayIndex,
        dayNameLong,
        dayNameShort,
        month: monthIndex,
        monthLongName,
        monthShortName,
        year,
        mode,
        locale,
        placeholderValue: TimeUtilitiesService.setPlaceholder(locale, mode),
        realExportValue: tempTime.toString(),
        timestamp: tempTime.getTime(),
        timeInputPresentation: ''

      })
    }

    UtilitiesService.ColorizeLogOrange('pazi object', fullDateTimeObject);
    return fullDateTimeObject;
  }

  private static buildTimeInputPresentation(time: Date, monthDataObject: MonthDataObject, mode: string, locale: string) {
    switch (mode) {
      case PossibleContolModes.DATE:
        switch (locale) {
          case 'en':
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()}`;
          case'de':
            return `${UtilitiesService.zeroPad(time.getDate(), 2)}-${monthDataObject.monthLongName}-${time.getFullYear().toString()}`;
          default:
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()}`;
        }
        break;
      case PossibleContolModes.MONTH:
        switch (locale) {
          case 'en':
            return `${monthDataObject.monthLongName}/${time.getFullYear().toString()}`;
          case'de':
            return `${monthDataObject.monthLongName}-${time.getFullYear().toString()}`;
          default:
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()}`;
        }
        break;
      case PossibleContolModes.DATETIME:
        switch (locale) {
          case 'en':
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()} ${UtilitiesService.zeroPad(((time.getHours() + 11) % 12 + 1), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}:${time.getHours() > 12 ? 'PM' : 'AM'}`;
          case'de':
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()} ${UtilitiesService.zeroPad(time.getHours(), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}`;
          default:
            return `${monthDataObject.monthLongName}/${UtilitiesService.zeroPad(time.getDate(), 2)}/${time.getFullYear().toString()} ${UtilitiesService.zeroPad(((time.getHours() + 11) % 12 + 1), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}:${time.getHours() > 12 ? 'PM' : 'AM'}`;
        }
        break;
      case PossibleContolModes.TIME:
        switch (locale) {
          case 'en':
            return `${UtilitiesService.zeroPad(((time.getHours() + 11) % 12 + 1), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}:${time.getHours() > 12 ? 'PM' : 'AM'}`;
          case'de':
            return `${UtilitiesService.zeroPad(time.getHours(), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}`;
          default:
            return `${UtilitiesService.zeroPad(((time.getHours() + 11) % 12 + 1), 2)}:${UtilitiesService.zeroPad(time.getHours(), 2)}:${time.getHours() > 12 ? 'PM' : 'AM'}`;
        }
        break;
    }
  }

  private static setPlaceholder(locale: string, mode: string) {
    switch (mode) {
      case PossibleContolModes.DATE:
        switch (locale) {
          case 'en':
            return 'MMMM/dd-yy';
          case'de':
            return 'dd-MMMM-yyyy';
          default:
            return 'MMMM/dd-yy';
        }
        break;
      case PossibleContolModes.MONTH:
        switch (locale) {
          case 'en':
            return 'MMMM/yy';
          case'de':
            return 'MMMM-yyyy';
          default:
            return 'MMMM/yy';
        }
        break;
      case PossibleContolModes.DATETIME:
        switch (locale) {
          case 'en':
            return 'MMMM/dd-yy hh:mm AM/PM';
          case'de':
            return 'MMMM-yyyy hh:mm';
          default:
            return 'MMMM/dd-yy hh:mm AM/PM';
        }
        break;
      case PossibleContolModes.TIME:
        switch (locale) {
          case 'en':
            return 'hh:mm AM/PM';
          case'de':
            return 'hh:mm';
          default:
            return 'hh:mm AM/PM';
        }
        break;
    }
  }


}
