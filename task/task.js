const csv = require('csvtojson');
const path = require('path');
const Weather = require('../models/weatherSchema');


const csvFilePath = path.join(__dirname, 'daily.csv');

let done = false;


csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {

        var newForecast = new Weather();
        
        newForecast.DATE = jsonObj.DATE;
        newForecast.TMAX = jsonObj.TMAX;
        newForecast.TMIN = jsonObj.TMIN;

        
        newForecast.save()
        .then(function(result){
            console.log(`successfully saved ${result}`);
        })
        .catch((err)=>{

           console.log("there was an error"+err);
          
        });


    })
    .on('done', (err) => {
        console.log("done processing csv");
        done = true;
    });


// module.exports =  result;
