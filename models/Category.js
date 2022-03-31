const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },   
  market_id: {
    type: Schema.Types.ObjectId,
    ref: 'markets'
  },   
  market_code: {
    type: String,
    required: true
  },   
  c_AR_name: {
    type: String,
    required: true
  }, 
  c_EN_name: {
    type: String,
    required: true
  },
  c_code: {
    type: String,
    required: true
  },
    
  c_description: {
    type: String,
    required: true
  }, 
  image: {
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

module.exports = Category = mongoose.model('category', categorySchema);