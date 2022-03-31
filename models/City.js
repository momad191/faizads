const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const citySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },      
  countryid: {
    type: Schema.Types.ObjectId,
    ref: 'countries'
  }, 
  country_code: {
    type: String,
    
  }, 
  city_AR_name: {
    type: String,
    required: true
  }, 
  city_EN_name: {
    type: String,
    required: true
  },
  city_code: {
    type: String,
    required: true
  },
    
  city_description: {
    type: String,
    required: true
  },

  city_image: {
    type: String,
   
  }, 
 
 
  name: {
    type: String
  },
  avatar: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = City = mongoose.model('city', citySchema);