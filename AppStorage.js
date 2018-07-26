/** 
AppStorage.js v0.0.2

MIT License
@license
Copyright (c) 2018 Jackson N.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

Github repository : https://github.com/T1TAN1UM/AppStorage */

(function(window){
  // You can enable the strict mode commenting the following line  
  // 'use strict';

  var APPSTORAGETYPE = Object.freeze({"LOCALSTORAGE":1, "SESSIONSTORAGE":2});
  
  function appStorageInit(){
    var _appStorageObject = {};
    //library uses sessionStorage by default
    //set _appStorageObject.storageMethod below to APPSTORAGETYPE.LOCALSTORAGE if you prefer to use localstorage instead
    // to understand difference between session storage and local storage refar : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
    _appStorageObject.storageMethod = APPSTORAGETYPE.LOCALSTORAGE;
    _appStorageObject.retrieve = function(key) {
      return (_appStorageObject.storageMethod == APPSTORAGETYPE.SESSIONSTORAGE) ? sessionStorage.getItem(key) : localStorage.getItem(key);
    }
    _appStorageObject.store = function(key, value) {
      return (_appStorageObject.storageMethod == APPSTORAGETYPE.SESSIONSTORAGE) ? sessionStorage.setItem(key, value) : localStorage.setItem(key, value);
    }  
    _appStorageObject.remove = function(key) {
      return (_appStorageObject.storageMethod == APPSTORAGETYPE.SESSIONSTORAGE) ? sessionStorage.removeItem(key) : localStorage.removeItem(key);
    }
    return _appStorageObject;
  }

  // We need that our library is globally accesible, then we save in the window
  if(typeof(window.appStorage) === 'undefined'){
    window.appStorage = appStorageInit();
  }
})(window); // We send the window variable withing our function
