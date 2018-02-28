const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');


const weatherSchema = new Schema({
    
    DATE: {type:String, required:true,unique:true},
    TMAX: {type:Number, required:true},
    TMIN: {type:Number, required:true}
    
});


module.exports = mongoose.model('Weather', weatherSchema);