'use strict';

var request = require('request');

function Weather(){

}

Weather.high = function(zip, cb){
  
  var url = 'http://api.wunderground.com/api/2738df9035fbffa9/forecast/q/' + zip + '.json';
  request( url, function(error,response,body){
    body = JSON.parse(body);
  
    cb(body.forecast.simpleforecast.forecastday[0].high.fahrenheit + ' F');
  });
};

Weather.low = function(zip, cb){
  
  var url = 'http://api.wunderground.com/api/2738df9035fbffa9/forecast/q/' + zip + '.json';
  request( url, function(error,response,body){
    body = JSON.parse(body);

    cb(body.forecast.simpleforecast.forecastday[0].low.fahrenheit + ' F');
 });
};

module.exports = Weather;


