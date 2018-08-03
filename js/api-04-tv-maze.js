// https://www.tvmaze.com/api
var request = superagent;

// 1. What is the average rating for the show Better Call Saul?
var respuesta1 = document.querySelector('#tvmaze-1');
var tvBaseAPI = 'http://api.tvmaze.com/'
var tvSearch = '/search/shows?q=:'
var consulta = 'saul'

var finalAPI = tvBaseAPI+tvSearch+consulta

request
    .get(finalAPI)
    .then(function(response){
        var average = response.body[0].show.rating.average;
        respuesta1.textContent = average;
    });
// 2. When was the premiere date for the 9th season of Friends?
var respuesta2 = document.querySelector('#tvmaze-2');
var consulta2 = 'friends'
var tvShows = 'shows/'
var season = '/seasons'

request
    .get(tvBaseAPI+tvSearch+consulta2)
    .then(function(response){
        var id = response.body[0].show.id;

        request
            .get(tvBaseAPI+tvShows+id+season)
            .then(function(response){
                var premiereDate = response.body[8].premiereDate;
                respuesta2.textContent = premiereDate;
            })
    })

// 3. How many shows has actor Andrew Grimes (of the Walking Dead) appeared in?
var respuesta3 = document.querySelector('#tvmaze-3');

var consulta3 = 'walking';
var tvPeople = 'people/'
var tvCast = '/cast'
var tvCredits ='/castcredits'
request
    .get(tvBaseAPI+tvSearch+consulta3)
    .then(function(response){
        var walkingID = response.body[0].show.id;
        
        request
            .get(tvBaseAPI+tvShows+walkingID+tvCast)
            .then(function(response){
                var abraham = response.body[0].person.id;

                request
                    .get(tvBaseAPI+tvPeople+abraham+tvCredits)
                    .then(function(response){
                        var apariciones = response.body.length;

                        respuesta3.textContent = 'Aparece en ' + apariciones+ ' shows mas'

                    })
            })
    })