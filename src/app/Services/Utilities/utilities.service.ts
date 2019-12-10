// -----------------------------------------------------------------------
// <copyright file="utilities.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  static DEVICE_LIMITER = 992;

  constructor() {
  }

  /**
   * DeepCopy utilities
   * @param inObject object to copy
   */
  public static DeepCopy(obj) {
    let copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || 'object' !== typeof obj) {
      return obj;
    }

    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.DeepCopy(obj[i]);
      }
      return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const attr in obj) {
        if (obj.hasOwnProperty(attr)) {
          copy[attr] = this.DeepCopy(obj[attr]);
        }
      }
      return copy;
    }

    throw new Error('Unable to copy obj! Its type isn\'t supported.');
  }

  /**
   * Equality of objects
   * @param objectA first object to compare
   * @param objectB second object to compare
   */
  public static ObjectsAreEqual(objectA: any, objectB: any) {

    if (objectA === objectB) {
      return true;
    }
    if (this.isPrimitive(objectA) && this.isPrimitive(objectB)) {
      return objectA === objectB;
    }
    if (Object.keys(objectA).length !== Object.keys(objectB).length) {
      return false;
    }
    // compare objects with same number of keys
    for (const key of Object.keys(objectA)) {
      if (!(Object.keys(objectB).includes(key))) {
        return false;
      } // other object doesn't have this prop
      if (!this.ObjectsAreEqual(objectA[key], objectB[key])) {
        return false;
      }
    }
    return true;
  }

  /**
   * simple check is object of primeitve types
   */

  public static isPrimitive(arg) {
    const type = typeof arg;
    return arg == null || (type !== 'object' && type !== 'function');
  }

  public static isSimpleAtomicValueObject(objectToCheck: any) {
    if (typeof (objectToCheck) !== 'object' && typeof (objectToCheck) !== 'undefined') {
      return true;
    }
    return false;
  }

  /**
   * swap element inside array
   * @param inputArray array with elemeny to swap
   * @param index1 position of element in array
   * @param index2 position of swap element
   */
  public static arraySwapElements(inputArray: any[], index1: number, index2: number) {
    inputArray[index1] = (inputArray.splice(index2, 1, inputArray[index1]))[0];
    return inputArray;
  }

  /**
   * get icons by data type and value
   * @param dataType object data type
   * @param actualValue object property name
   */
  public static getIconByDataTypeAndValue(dataType: string, actualValue: any) {
    if (!UtilitiesService.isExisty(actualValue)) {
      return;
    }
    switch (dataType) {
      case 'Boolean':
        // if (typeof actualValue !== 'undefined') {
        if (UtilitiesService.isExisty(actualValue.toString())) {
          if (actualValue.toString() === 'true') {
            return 'fal fa-check-square';
          } else {
            return 'fal fa-square';
          }
        }
        break;
      case 'Date':
        return 'fal fa-calendar-alt';
        break;
    }

  }

  /**
   * add liding zeros when such a format needed
   * @param num, original number which is object of changes, adding zeros
   * @param places, total numbers we want to have after adding zeros on existing value
   */
  public static zeroPad(num, places) {
    return String(num).padStart(places, '0');
  }

  /**
   * Checks if the given parameter "inValue"
   * - is null
   * - or undefined
   * - or empty string
   * - or number but NaN
   * Returns true if inValue has a value, otherwise false.
   * @param inValue value to check.
   */
  public static isExisty(inValue: any) {
    return inValue !== null
      && typeof (inValue) !== 'undefined'
      && inValue !== ''
      && inValue !== 'undefined'
      && inValue !== 'null'
      && !(typeof inValue === 'number' && isNaN(inValue));
  }

  /**
   * @param obj object property that need to be capitalize
   */
  public static capitalizeKeys = (obj) => {
    const transformedObj = UtilitiesService.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (UtilitiesService.isObject(obj[key]) || UtilitiesService.isArray(obj[key])) {
        const transformedKey = key.replace(/^\w/, (c, _) => c.toUpperCase());
        transformedObj[transformedKey] = UtilitiesService.capitalizeKeys(obj[key]);
      } else {
        const transformedKey = key.replace(/^\w/, (c, _) => c.toUpperCase());
        transformedObj[transformedKey] = obj[key];
      }
    }
    return transformedObj;
  }

  public static ColorizeLogOrange(...input) {
    input.push('orange');
    this.ColorizeLog(input);
  }

  public static ColorizeLogBlue(...input) {
    input.push('blue');
    this.ColorizeLog(input);
  }

  public static ColorizeLogGreen(...input) {
    input.push('green');
    this.ColorizeLog(input);
  }

  public static ColorizeLogYellow(...input) {
    input.push('yellow');
    this.ColorizeLog(input);
  }

  private static ColorizeLog(...input) {
    const color = input[0].pop();
    let style = '';
    switch (color) {
      case 'orange':
        style = 'background: #ff6600; color: white; font-weight:bold, padding: 3px';
        break;
      case 'blue':
        style = 'background: #03a9f4; color: white; font-weight:bold, padding: 3px';
        break;
      case 'green':
        style = 'background: #4caf50; color: white; font-weight:bold, padding: 3px';
        break;
      case 'yellow':
        style = 'background: yellow; color: black; font-weight:bold, padding: 3px';
        break;
      default:
        style = 'background: #ff0000; color: white; font-weight:bold, padding: 3px';
        break;
    }

    if (color !== 'yellow') {
      console.log(`%c ${input[0].splice(0, 1)[0]} `, style);
      console.log(...input[0]);
    } else if (color === 'yellow') {
      console.log(`%c***************************`, style);
    }

  }

  public static isObject = o => Object.prototype.toString.apply(o) === '[object Object]';
  public static isArray = o => Object.prototype.toString.apply(o) === '[object Array]';

  /**
   * determine the width of the screen over css .media-checker and z-index
   */
  public static checkMedia() {
    if (this.isExisty(document.querySelector('.media-checker'))) {
      return +(getComputedStyle(document.querySelector('.media-checker')).getPropertyValue('z-index'));
    }
  }

  /**
   * debounced function
   * @param delay miliseconds
   * @param fn function to execute
   */
  public static debounced(fn, delay) {
    let timerId;
    return (...args) => {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        fn(...args);
        timerId = null;
      }, delay);
    };
  }

  /**
   * throttle function
   * @param delay miliceconds
   * @param fn function to egzeccute
   */
  public static throttled(fn, delay) {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) {
        return;
      }
      lastCall = now;
      return fn(...args);
    };
  }

  /**
   * if the size of screen is greater than 992 it will return true
   */
  public static isDesktop() {
    return this.checkMedia() > this.DEVICE_LIMITER;
  }

  /**
   * returns a random number in the required range
   * @param minValue lower range value
   * @param maxValue upper range value
   */
  public static randomIntegerBetween(minValue: number, maxValue: number) {
    return Math.floor(Math.random() * (+maxValue - +minValue)) + +minValue;
  }

  /**
   * convert input string into camel case one
   * @param str input string
   */
  public static camelize(str) {
    if (this.isExisty(str)) {
      // str = str.replace();
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '').replace(/\./g, '');
    }
    return '';
  }

  /**
   * return int value depends on month name
   * @param monthValue name of mounth
   */
  static mapMonthNameToRealMonthNumber(monthValue: string) {
    switch (monthValue) {
      case 'January':
        return 1;
      case 'February':
        return 2;
      case 'March':
        return 3;
      case 'April':
        return 4;
      case 'May':
        return 5;
      case 'Jun':
        return 6;
      case 'July':
        return 7;
      case 'August':
        return 8;
      case 'September':
        return 9;
      case 'Octber':
        return 10;
      case 'November':
        return 11;
      case 'December':
        return 12;
    }
  }

  static isFilterPopupActive() {
    console.log(document.querySelector('.page-filter-wrapper'));

    return false;
  }

  public static getParameterByName(name) {
    const match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }


}



