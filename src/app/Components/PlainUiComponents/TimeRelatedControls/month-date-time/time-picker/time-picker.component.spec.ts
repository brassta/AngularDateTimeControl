// -----------------------------------------------------------------------
// <copyright file="time-picker.component.spec.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TimePickerComponent} from './time-picker.component';
import {FormsModule} from '@angular/forms';
import {TimeParser} from '@components/PlainUiComponents/time-picker/time-parser';
import {UtilitiesService} from '@services/Utilities/utilities.service';
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from '@angular/platform-browser-dynamic/testing';

describe('TimePickerComponent', () => {
  let component: TimePickerComponent;
  let fixture: ComponentFixture<TimePickerComponent>;
  let utilitiesService: UtilitiesService;
  let timeParser: TimeParser;
  beforeEach(() => {
    TestBed.resetTestEnvironment();
    TestBed.initTestEnvironment(BrowserDynamicTestingModule,
      platformBrowserDynamicTesting());
  });
  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        TimePickerComponent
      ],
      providers: [
        TimeParser
        // { provide:  , useClass: class {} },
      ]
    })
      .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(TimePickerComponent);
    component = fixture.componentInstance;

    const mockedTimeData = 'November 25, 2019';
    const mockedFormDataObject = {
      fieldType: 'customTime',
      label: 'Day transition',
      key: 'individualDayLimit',
      value: null,
      fieldData: {
        dataType: 'Time',
        columnName: 'Day transition',
        propertyName: 'individualDayLimit',
        propertyId: 20276,
        propertyPath: '20000_20276',
        isMandatory: false,
        caption: 'Day transition',
        visible: true,
        displayInGrid: false,
        displayInDetailsForm: true,
        dataFormOrder: 137,
        dataGridOrder: 137,
        belongsToTab: 'LayoutControlGroup_20000_{C7312968-E24F-4fde-B4BB-30B3137C6BA2}'},
      additionalData: {
        id: 'timepicker_708602280',
        displayValue: '9:10 PM'
      }
    };
    component.time = mockedTimeData;
    component.formData = mockedFormDataObject;
    fixture.detectChanges();
    utilitiesService = TestBed.get(UtilitiesService);
    timeParser = TestBed.get(TimeParser);
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
