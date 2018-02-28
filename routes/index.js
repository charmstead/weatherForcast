var express = require('express');
var router = express.Router();
const Weather = require('../models/weatherSchema');
const moment = require('moment');



let csvJson = [];

/* GET historical data. */
router.get('/historical', function (req, res, next) {

  Weather
    .find()
    .select('-_id -TMIN -TMAX -__v')
    .exec((err, result) => {

      if (err) return res.json(err);
      return res.json(result);

    });

});


router.post('/historical', function (req, res, next) {

  const DATE = req.body.DATE;
  const TMIN = req.body.TMIN;
  const TMAX = req.body.TMAX;

  const newForecast = new Weather();
  newForecast.DATE = DATE;
  newForecast.TMAX = TMAX;
  newForecast.TMIN = TMIN;


  newForecast.save()

    .then(function (result) {

      const date = { DATE: result.DATE };

      res.status(201).send(date);

    })
    .catch((err) => {

      res.json(err);

    });

});


router.delete('/historical/:date', function (req, res, next) {

  const date = req.params.date;

  Weather.findOneAndRemove({DATE:date},(err,done)=>{

    if(err) return res.status(404).send({error:"cannot delete a data not found"});

    return res.sendStatus(200);

  });


});

router.get('/historical/:date', function (req, res, next) {

  const date = req.params.date;

  Weather
    .findOne({ DATE: date })
    .select('-_id -__v')
    .exec((err, result) => {

      if (err) return res.json(err);

      if (result) return res.json(result);

      return res.sendStatus(404);


    });

});

router.get('/forecast/:date', function (req, res, next) {

  const date = req.params.date;

  let dates = [];
  let counter = 0;

  for (let i = 0; i <= 6; i++) {

    counter++;
    dates.push(moment(date, "YYYYMMDD").add(i, 'days').format("YYYYMMDD"));

    if (counter >= 7) {

      Weather
        .find({ 'DATE': { $in: dates } })
        .select('-_id -__v')
        .exec((err, result) => {

          if (err) return res.json(err);

          if (result.length>0) return res.json(result);

          return res.sendStatus(404);


        });

    }

  }


});



module.exports = router;