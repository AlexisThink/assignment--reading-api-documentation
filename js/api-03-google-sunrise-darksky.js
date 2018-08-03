/*
##### Geocoding
1. What are latitude longitude coordinates of Montreal?
  - https://maps.googleapis.com/maps/api/geocode/json?address=Montreal

2. What time does the sun set in Montreal (based on the Google geocode coordinates)?
  - https://sunrise-sunset.org/api

3. What is the weekly weather forecast in Montreal?
  - https://darksky.net/dev
  - Note: You will have to create an account.

*/

var request = superagent;
//========================================================================
//  (1) What are latitude longitude coordinates of Montreal?
//
//     - https://developers.google.com/maps/documentation/geocoding/start
//     = NOtE: You don't need an API key for this api
//

const answerElement_apimashup_1 = document.getElementById('apimashup-1')
var googleAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=Montreal';


request
  .get(googleAPI)
  .then(function(response){

    var latitude = response.body.results[0].geometry.location.lat;
    var longitude = response.body.results[0].geometry.location.lng;

    var resultado = 'Latitud: ' + latitude + ' Longitud: ' + longitude;

    answerElement_apimashup_1.textContent = resultado;

//========================================================================
//  (2) What time does the sun set in Montreal (based on the Google geocode coordinates)?

const answerElement_apimashup_2 = document.getElementById('apimashup-2')
var baseSunsetAPI = 'https://api.sunrise-sunset.org/json?';
var lat = 'lat='+latitude
var long = 'lng='+longitude

var sunsetAPI = baseSunsetAPI+lat+'&'+long;

request
    .get(sunsetAPI)
    .then(function(response){
      var sunsetHour = response.body.results.sunset;
      answerElement_apimashup_2.textContent = sunsetHour;
    });

//========================================================================
//  (3) What is the weekly weather forecast in Montreal? (look for summary property in 'daily')

const answerElement_apimashup_3 = document.getElementById('apimashup-3')
var watherAPI = 'https://api.darksky.net/forecast/'
var keyWather = '2f951a609b541b2049d0bf23f70143d3/'
var latWather = latitude +','
var longWhater = longitude

var completeWhaterAPI = watherAPI+keyWather+latWather+longWhater;
var test = 'https://api.darksky.net/forecast/2f951a609b541b2049d0bf23f70143d3/45.5016889,-73.567256'

request
    .get(test)
    .then(function(response){
      var days = response.body.daily.data;
      days.forEach(function(day){
        var p = document.createElement('p');
        var hr = document.createElement('hr');

        p.textContent = day.summary;

        answerElement_apimashup_3.appendChild(p);
        answerElement_apimashup_3.appendChild(hr);
      })
    });
  });

//
