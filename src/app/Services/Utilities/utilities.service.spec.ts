// -----------------------------------------------------------------------
// <copyright file="utilities.service.spec.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {TestBed} from '@angular/core/testing';

import {UtilitiesService} from './utilities.service';

describe('Service: UtilitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created UtilitiesService', () => {
    const service: UtilitiesService = TestBed.get(UtilitiesService);
    expect(service).toBeTruthy();
  });

  // ---------------- Test isExisty ----------------
  const boolUnset: boolean = undefined;
  const boolNull: boolean = null;
  const numberUnset: number = undefined;
  const numberNull: number = null;
  const stringUnset: string = undefined;
  const stringUndefined = 'undefined';
  const stringNull = 'null';
  const objectNull: string = null;
  const isExistyParameters = [
    {description: 'should be true with valid int value', input: 1, result: true},
    {description: 'should be true with valid string value', input: 'Hi', result: true},
    {description: 'should be true with boolean value true', input: true, result: true},
    {description: 'should be true with boolean value false', input: false, result: true},
    {description: 'should be true with empty array ', input: [], result: true},
    {description: 'should be true with filled array ', input: [1, 2], result: true},
    {description: 'should be true with empty object', input: {}, result: true},
    {description: 'should be true with filled object', input: {foo: 'bar'}, result: true},
    {description: 'should be false with no input', result: false},
    {description: 'should be false with unset boolean variable', input: boolUnset, result: false},
    {description: 'should be false with boolean null value', input: boolNull, result: false},
    {description: 'should be false with unset number variable', input: numberUnset, result: false},
    {description: 'should be false with number null value', input: numberNull, result: false},
    {description: 'should be false with unset string variable', input: stringUnset, result: false},
    {description: 'should be true with not set string value', input: stringUndefined, result: false},
    {description: 'should be true with string null value', input: stringNull, result: false},
    {description: 'should be false with object null value', input: objectNull, result: false},
    {description: 'should be false with when value is NaN', input: NaN, result: false},
    {description: 'should be false with empty string value', input: '', result: false},
  ];

  isExistyParameters.forEach(param => {
    it('#isExisty ' + param.description, () => {
      const result = UtilitiesService.isExisty(param.input);
      expect(result).toBe(param.result);
    });
  });
  // ---------------- end of Test isExisty ----------------


  // ---------------- Test DeepCopy ----------------
  const testBusinessObject: any = {
    fieldType: 'textbox',
    label: 'Warehouse',
    key: 'warehouse',
    value: null,
    fieldData: {
      caption: 'Warehouse',
      dataType: 'Undefined',
      description: '',
      filterId: '125000_{DAC96313-0689-4c82-9C35-7CA66E164D21}',
      parentName: 'Article',
      propertyName: null,
      value: null,
      belongsToTab: 'LayoutControlGroup_125000'
    },
    additionalData: null
  };

  it('#DeepCopy the copy of the object should be Equal as the original, by fields and values ', () => {
    const copyOfObject = UtilitiesService.DeepCopy(testBusinessObject);
    expect(copyOfObject).toEqual(testBusinessObject);
  });
  // ---------------- end of Test DeepCopy ----------------


  // ---------------- Test ObjectsAreEqual ----------------
  const testBusinessObjectA: any = {
    fieldType: 'textbox',
    label: 'Warehouse',
    key: 'warehouse',
    value: null,
    additionalData: null
  };

  const testBusinessObjectB: any = {
    fieldType: 'textbox',
    label: 'Warehouse',
    key: 'warehouse',
    value: null,
    additionalData: null
  };

  const testBusinessObjectC: any = {
    fieldType: 'checkbox',
    label: 'Warehouse',
    key: 'warehouse',
    value: null,
    additionalData: null
  };


  const ObjectsAreEqualParameters = [
    {description: 'should be true if the objects are the same', firstInput: testBusinessObjectA, secundInput: testBusinessObjectB, result: true},
    {description: 'should be false if the objects are different', firstInput: testBusinessObjectA, secundInput: testBusinessObjectC, result: false},
  ];

  ObjectsAreEqualParameters.forEach(param => {
    it('#ObjectsAreEqual ' + param.description, () => {
      const result = UtilitiesService.ObjectsAreEqual(param.firstInput, param.secundInput);
      expect(result).toBe(param.result);
    });
  });
  // ---------------- end of Test ObjectsAreEqual ----------------


  // ---------------- Test arraySwapElements ----------------
  const listOriginal = [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 7},
    {value: 8},
    {value: 9}
  ];
  const listExpected = [
    {value: 0},
    {value: 1},
    {value: 2},
    {value: 7},
    {value: 4},
    {value: 5},
    {value: 6},
    {value: 3},
    {value: 8},
    {value: 9}
  ];
  const indexStartPosition = 3;
  const indexEndPosition = 7;

  it('#arraySwapElements the elements in the array switched positions', () => {
    const result = UtilitiesService.arraySwapElements(listOriginal, indexStartPosition, indexEndPosition);
    expect(result).toEqual(listExpected);
  });
  // ---------------- end of Test arraySwapElements ----------------


  // ---------------- Test isSimpleAtomicValueObject ----------------
  const simpleObject = {value1: 'test1', value2: 'test2'};
  const simpleArray = [0, 1, 2];
  const objectUndefined: object = undefined;
  const stringVlaue = 'test string';
  const stringVlaueUndefined: string = undefined;
  const numberValue = 10;
  const numberValueUndefined: number = undefined;

  const isSimpleAtomicValueObjectParameters = [
    {description: 'should be false with valid Object value', input: simpleObject, result: false},
    {description: 'should be false with valid Array value', input: simpleArray, result: false},
    {description: 'should be false with Undefined value', input: objectUndefined, result: false},
    {description: 'should be true with valid String value', input: stringVlaue, result: true},
    {description: 'should be false with valid String Undefined value', input: stringVlaueUndefined, result: false},
    {description: 'should be true with valid Number value', input: numberValue, result: true},
    {description: 'should be false with valid Number Undefined value', input: numberValueUndefined, result: false},
  ];

  isSimpleAtomicValueObjectParameters.forEach(param => {
    it('#isSimpleAtomicValueObject ' + param.description, () => {
      const result = UtilitiesService.isSimpleAtomicValueObject(param.input);
      expect(result).toBe(param.result);
    });
  });
  // ---------------- end of Test isSimpleAtomicValueObject ----------------


  // ---------------- getIconByDataTypeAndValue ----------------
  const dataTypeBoolean = 'Boolean';
  const dataTypeDate = 'Date';
  const actualValueTrue = 'true';
  const actualValueFalse = 'flase';
  const actualValueEmptyStirng = '';
  const actualValueDate = '2017-01-01T00:00:00';
  const actualValueNull = null;

  const getIconesByDataTypeAndValueParamenters = [
    {
      description: 'should be fal fa-check-square with valid type value -> Boolean , and with valid actual value -> true',
      inputFirst: dataTypeBoolean,
      inputSecond: actualValueTrue,
      result: 'fal fa-check-square'
    },
    {
      description: 'should be fal fal fa-square with valid type value -> Boolean , and with valid actual value -> false',
      inputFirst: dataTypeBoolean,
      inputSecond: actualValueFalse,
      result: 'fal fa-square'
    },
    {
      description: 'should be fal fa-calendar-alt with valid type value -> Boolean , and with valid actual value -> 2017-01-01T00:00:00',
      inputFirst: dataTypeDate,
      inputSecond: actualValueDate,
      result: 'fal fa-calendar-alt'
    },
    {
      description: 'should be undefined with valid type value -> Boolean , and with actual value -> empty string',
      inputFirst: dataTypeDate,
      inputSecond: actualValueEmptyStirng,
      result: undefined
    },
    {
      description: 'should be undefined with valid type value -> Boolean , and with actual value -> null',
      inputFirst: dataTypeDate,
      inputSecond: actualValueNull,
      result: undefined
    }
  ];

  getIconesByDataTypeAndValueParamenters.forEach(param => {
    it('#getIconsByDataTypeAndValue ' + param.description, () => {
      const result = UtilitiesService.getIconByDataTypeAndValue(param.inputFirst, param.inputSecond);
      expect(result).toBe(param.result);
    });
  });

  // ---------------- end of getIconByDataTypeAndValue ----------------


  // ---------------- zeroPad ----------------

  const zeroPadParameters = [
    {description: 'should be 010 with valid number value 10 and required length 3', inputFirst: 10, inputSecond: 3 , result: '010'},
    {description: 'should be 010 with valid string value 10 and required length 3', inputFirst: '10', inputSecond: 3 , result: '010'},
    {description: 'should be 222 with valid number value 222 and required length 3', inputFirst: 222, inputSecond: 3 , result: '222'},
    {description: 'should be 00222 with valid string value 222 and required length 5', inputFirst: '222', inputSecond: 5 , result: '00222'},
  ];
  zeroPadParameters.forEach(param => {
    it('#zeroPad ' + param.description, () => {
      const result = UtilitiesService.zeroPad(param.inputFirst, param.inputSecond);
      expect(result).toBe(param.result);
    });
  });

  // ---------------- end of zeroPad ----------------


});
