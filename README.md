# Rainman-js

Javascript bindings to Rainman's reporting mechanism.

## Installing

```
$ npm install rainman-js
```

## Usage

```js
var rainman = require('rainman');

// optionalData is just that, optional
// if no date is passed, it defaults to now()
// precision defaults to 'day'
var optionalData = {
  date: new Date(),
  client_id: 123,
  precision: 'hour'
};

rainman.report(
  rainmanEndpoint,
  group_id,
  key,
  value,
  number,
  callback,
  optionalData
);
```
