import {UtilitiesService} from '@services/Utilities/utilities.service';

export enum possibleTimeModesEnum {
  plainJavaScriptTimeObject,
  timeStamp
}

export class TimeParser {
  parseHours = (timeValue: Date): string => {
    return UtilitiesService.zeroPad(timeValue.getHours(), 2);
  }
  parseMinutes = (timeValue: Date): string => {
    return UtilitiesService.zeroPad(timeValue.getMinutes().toString(), 2);
  }
  parseDayPart = (timeValue: Date): string => {
    return timeValue.getHours() >= 12 ? 'PM' : 'AM';
  }
  rebuildTime = (time:Date, hourValue: number, minuteValue: number) => {
    time.setHours(hourValue);
    time.setMinutes(minuteValue);
    return time;
    // return `${UtilitiesService.zeroPad(hourValue.toString(), 2)}:${UtilitiesService.zeroPad(minuteValue.toString(), 2)} ${partOdDayValue}`;
  }

  rebuildTimeByInputTime = (timeValue: Date, mode: possibleTimeModesEnum) => {
    return `${this.parseHours(timeValue)}:${this.parseMinutes(timeValue)}:${this.parseDayPart(timeValue).toUpperCase()}`;
  }



  checkValidityOfTimeInput(inputValue: string, mode: string) {
    return inputValue.match(/((1[0-2]|0?[1-9]):([0-5][0-9]):?([AaPp][Mm]))/);
  }

  setTimeValueFromTimeString(enteredValue: string) {
    const valuesInInputValueSplittedToArray = enteredValue.split(':');
    const resultDate = new Date();
    resultDate.setHours(+valuesInInputValueSplittedToArray[0]);
    resultDate.setMinutes(+valuesInInputValueSplittedToArray[1]);
    return resultDate

  }
}
