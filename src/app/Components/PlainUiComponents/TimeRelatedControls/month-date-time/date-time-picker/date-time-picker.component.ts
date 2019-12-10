import {Component, Input, OnInit} from '@angular/core';
import {FullDateTimeObjectModel} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component";

@Component({
  selector: 'agenzzia-date-time-picker',
  templateUrl: './date-time-picker.component.html',
  styleUrls: ['./date-time-picker.component.less']
})
export class DateTimePickerComponent implements OnInit {

  @Input() time: FullDateTimeObjectModel

  constructor() {
  }

  ngOnInit() {
  }

}
