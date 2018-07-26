# AppStorage
Javascript utility to switch between localStorage and sessionStorage

## Installation
Just include the AppStorage.js file before including your application files.

AppStorage is available as a property of the window object.

Use appStorage or window.appStorage to use it.

### Note : By default AppStorage uses sessionStorage by default
set _appStorageObject.storageMethod in AppStorage.js to APPSTORAGETYPE.LOCALSTORAGE if you prefer to use localstorage instead

To understand difference between session storage and local storage refer : https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API

## API

### Store an Item
```javascript
appStorage.store(key, value);
```

### Retrieve an Item
```javascript
appStorage.retrieve(key);
```

### Remove an Item
```javascript
appStorage.remove(key);
```
