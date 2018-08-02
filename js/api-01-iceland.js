//========================================================================
// (1) How many births were there in Iceland's national hospital today?
var apiBase = 'https://apis.is';
var hospital = '/hospital';
var concerts ='/concerts';
var flights = '/flight?language=en&type=arrivals'
var apiURL = apiBase + flights;

const icelandAnswer1 = document.getElementById('iceland-1');

//========================================================================
// (2) How many **arrival** flights are scheduled for today?
const answerElement_iceland_2 = document.getElementById('iceland-2')
var counterFlight = 0;

request
  .get(apiURL)
  .then(function(response){
    var vuelos = response.body.results;
    vuelos.forEach(function(vuelo){
      if (typeof vuelo.plannedArrival === 'string'){
        var tipo = vuelo.plannedArrival.toString();
        var tipoCut = tipo.split("");

        for(var i = 0; i < tipoCut.length; i++){
          var current =  tipoCut[i];
          if(current === 'E' && tipoCut[i+1] === 's' && tipoCut[i+2] === 't' && tipoCut[i+3] === 'i' && tipoCut[i+4] === 'm'){
            counterFlight += 1;
          }
          if(current === 'C' && tipoCut[i+1] === 'o' && tipoCut[i+2] === 'n' && tipoCut[i+3] === 'f' && tipoCut[i+4] === 'i'){
            counterFlight += 1;
          }
        }
      }
    })
    answerElement_iceland_3.textContent = counterFlight;
  })

//========================================================================
// (3) What is the next concert event in Iceland?
const answerElement_iceland_3 = document.getElementById('iceland-3')

request
  .get(apiBase+concerts)
  .then(function(conResponse){
    answerElement_iceland_2.textContent = conResponse.body.results[0].name;
  })


//
