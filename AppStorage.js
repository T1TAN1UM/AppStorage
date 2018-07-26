/**
 * AppStorage.js v0.0.1
 * @license
 * Copyright Jackson Joseph Naik All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/T1TAN1UM/AppStorage/blob/master/LICENSE
 * Github repository : https://github.com/T1TAN1UM/AppStorage
 */

(function(window){
    // You can enable the strict mode commenting the following line  
    // 'use strict';
  
    var APPSTORAGETYPE = Object.freeze({"LOCALSTORAGE":1, "SESSIONSTORAGE":2});
    
    function appStorageInit(){
      var _appStorageObject = {};
      //library uses sessionStorage by default
      //set _appStorageObject.storageMethod below to APPSTORAGETYPE.LOCALSTORAGE if you prefer to use localstorage instead
      // to understand difference between session storage and local storage refar : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API
      _appStorageObject.storageMethod = APPSTORAGETYPE.SESSIONSTORAGE;
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
