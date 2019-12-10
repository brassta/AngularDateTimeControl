import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {TimePickerComponent} from "./Components/PlainUiComponents/TimeRelatedControls/month-date-time/time-picker/time-picker.component";
import {TimeParser} from "@components/PlainUiComponents/TimeRelatedControls/time-parser";
import {DateMonthHeaderComponent} from '@components/PlainUiComponents/TimeRelatedControls/month-date-time/date-month-header/date-month-header.component';
import {DatePickerComponent} from "@components/PlainUiComponents/TimeRelatedControls/month-date-time/date-picker/date-picker.component";
import {MonthDateTimeComponent} from './Components/PlainUiComponents/TimeRelatedControls/month-date-time/month-date-time.component';
import { MonthPickerComponent } from '@components/PlainUiComponents/TimeRelatedControls/month-date-time/month-picker/month-picker.component';
import { DateTimePickerComponent } from './Components/PlainUiComponents/TimeRelatedControls/month-date-time/date-time-picker/date-time-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TimePickerComponent,
    DateMonthHeaderComponent,
    DatePickerComponent,
    MonthDateTimeComponent,
    MonthPickerComponent,
    DateTimePickerComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    TimeParser
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
