var request = require('request');


function report (endpoint, client_id, key, value, number, callback, optionalData) {
  optionalData = optionalData || { };

  var date = optionalData.date || new Date();
  var precision = optionalData.precision || 'day';

  var formData = {
    group_id: optionalData.group_id,
    client_id: client_id,
    key: key,
    value: value,
    number: number,
    date: dateToFormat(date, precision)
  };

  request.post(endpoint, function (err, body, response) {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  }).form(formData);
}


function pad(str, length) {
  str = String(str);
  while (str.length < length) {
    str = '0' + str;
  }
  return str;
}

function dateToFormat (date, precision) {
  var month = pad(date.getMonth() + 1, 2);
  var day = pad(date.getDate(), 2);

  var output = date.getFullYear() + "-" + month + "-" + day;

  if (precision === 'hour') {
    output += " " + pad(date.getHours(), 2);
  }

  return output;
}

exports.report = report;