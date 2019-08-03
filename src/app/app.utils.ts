import { Moment } from 'moment';
import * as moment from 'moment';
export function getBaseUrl(): string {
  return isTestMode()
  ? 'https://testapi.plusminus.az' : 'https://api.plusminus.az';
}
export const DEFAULT_LANG = 'az';
export const APP_KEY = 'uni';
const scripts = [];
export function switchToView(name: string) {
  setTimeout(() => {
    try {
      const nav = document.querySelector(name);
      if (nav) {
        nav.scrollIntoView();
      }
    } catch (er) {
      console.log(er);
    }
  }, 10);
}
export function isMobileSize(): boolean {
  try {
    const width =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    return width <= 576;
  } catch (er) {
    return false;
    console.log(er);
  }
}

export const MY_FORMATS = {
  parse: {
    dateInput: '20130208T08'
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

export function parseMomentToString(formValue: Object): Object {
  try {
    const newFormValue: string = Object.assign(formValue);
    Object.keys(newFormValue).forEach(key => {
      if (key.toLowerCase().includes('date') || moment.isMoment(key)) {
        newFormValue[key] = momentToString(newFormValue[key]);
      }
    });
    return newFormValue;
  } catch (er) {
    console.log(er);
    return formValue;
  }
}
export function momentToString(date: Moment) {
  if (!date) {
    return date;
  }
  return date.format('YYYYMMDD');
}


export function deepClone(item) {
  if (!item) { return item; } // null, undefined values check

  let types = [ Number, String, Boolean ],
      result;

  // normalizing primitives if someone did new String('aaa'), or new Number('444');
  types.forEach(function(type) {
      if (item instanceof type) {
          result = type( item );
      }
  });

  if (typeof result == "undefined") {
      if (Object.prototype.toString.call( item ) === "[object Array]") {
          result = [];
          item.forEach(function(child, index, array) {
              result[index] = deepClone( child );
          });
      } else if (typeof item == "object") {
          // testing that this is DOM
          if (item.nodeType && typeof item.cloneNode == "function") {
              result = item.cloneNode( true );
          } else if (!item.prototype) { // check that this is a literal
              if (item instanceof Date) {
                  result = new Date(item);
              } else {
                  // it is an object literal
                  result = {};
                  for (var i in item) {
                      result[i] = deepClone( item[i] );
                  }
              }
          } else {
              // depending what you would like here,
              // just keep the reference, or create new object
              if (false && item.constructor) {
                  // would not advice to do that, reason? Read below
                  result = new item.constructor();
              } else {
                  result = item;
              }
          }
      } else {
          result = item;
      }
  }

  return result;
}


export function loadExternalScripts(url: string) {

  const isLoaded = scripts.find(scr => scr === url);
  if (isLoaded) { return Promise.resolve(true); }
   return new Promise((resolve, reject) => {
     const scriptElement = document.createElement('script');
     scriptElement.src = url;
     scriptElement.charset = 'utf-8';
     scriptElement.onload = resolve;
     scripts.push(url);
     document.head.appendChild(scriptElement);
   });
 }

 export function isTestMode() {

  return (location.origin.includes('test.plusminus.az') || location.origin.includes('localhost:4200') )
 }

 export enum Key {
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Shift = 16,
  Escape = 27,
  ArrowLeft = 37,
  ArrowRight = 39,
  ArrowUp = 38,
  ArrowDown = 40,
  // http://unixpapa.com/js/key.html
  MacCommandLeft = 91,
  MacCommandRight = 93,
  MacCommandFirefox = 224
}
