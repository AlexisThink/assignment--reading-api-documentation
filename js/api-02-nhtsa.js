// ##### National Highway Transit Safety Administration
var baseAPI = 'https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json'
var apiTrucks = 'https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/truck?format=json';

var chevrolet = 0;
var nissan = 0;

// 1. How many types of Chevrolet models are registered with the NHTSA?
var respuesta1 = document.querySelector('#nhtsa-1');
request
    .get(baseAPI)
    .then(function(response){
        var carros = response.body.Results;
        carros.forEach(function(carro){
            if(carro.Make_Name === 'Chevrolet'){
                chevrolet += 1;
            }
        })
        
        respuesta1.textContent = chevrolet;
    });

// 2. What are the vehicle types that Nissan has?
var respuesta2 = document.querySelector('#nhtsa-2');
request
    .get(baseAPI)
    .then(function(response){
        var carros = response.body.Results;
        carros.forEach(function(carro){
            if(carro.Make_Name === 'Nissan'){
                nissan += 1;
            }
        })
        respuesta2.textContent = nissan;
    });

// 3. What are the types of models that exist for Toyota trucks in 2017?
var respuesta3 = document.querySelector('#nhtsa-3');
var trucksToyota = 0;
request
    .get(apiTrucks)
    .then(function(response){
        var trucks = response.body.Results;
        trucks.forEach(function(truck){
            if(truck.MakeName === 'Toyota'){
                trucksToyota += 1;
            }
        })        
    respuesta3.textContent = trucksToyota;
    });

