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

Weather.avgHigh = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/forecast10day/q/' + zip + '.json';
  request( url, function(error,response,body){
    var avgTemp = 0;
    var sum = 0;
    body = JSON.parse(body);
    for(var i = 0; i < 10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit);
      avgTemp = (sum/10);
    }
    cb(avgTemp + ' F');
  });
};

Weather.avgLow = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/forecast10day/q/' + zip + '.json';
  request( url, function(error,response,body){
    var avgTemp = 0;
    var sum = 0;
    body = JSON.parse(body);
    for(var i = 0; i < 10; i++){
      sum += parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit);
      avgTemp = (sum/10);
    }
    cb(avgTemp + ' F');
  });
};

Weather.highs = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/forecast10day/q/' + zip + '.json';
  request( url, function(error,response,body){
    var highs = [];
    body = JSON.parse(body);
    for(var i = 0; i < 10; i++){
      highs.push( parseInt(body.forecast.simpleforecast.forecastday[i].high.fahrenheit));
    }
    cb(highs);
  });
};
Weather.lows = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/forecast10day/q/' + zip + '.json';
  request( url, function(error,response,body){
    var lows = [];
    body = JSON.parse(body);
    for(var i = 0; i < 10; i++){
      lows.push( parseInt(body.forecast.simpleforecast.forecastday[i].low.fahrenheit));
    }
    cb(lows);
  });
};

Weather.deltas = function(zip, cb){
  var url = 'http://api.wunderground.com/api/d400acb7c08a6ba9/forecast10day/q/' + zip + '.json';
  request( url, function(error,response,body){
    var temps = [];
    body = JSON.parse(body);
    var forecasts = body.forecast.simpleforecast.forecastday;
    for(var i = 0; i < 10; i++){
      temps.push( parseInt(forecasts[i].high.fahrenheit)- parseInt(forecasts[i].low.fahrenheit));
    }
  cb(temps);
  });
};


module.exports = Weather;


