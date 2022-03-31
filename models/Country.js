const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const countrySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    
  country_AR_name: {
    type: String,
    required: true
  },
  country_EN_name: {
    type: String,
    required: true
  },
  country_code: {
    type: String,
    required: true
  },
    
  country_description: {
    type: String,
    required: true
  },

  country_image: {
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

module.exports = Country = mongoose.model('country', countrySchema);