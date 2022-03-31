const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const marketSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    
  m_AR_name: {
    type: String,
    required: true
  }, 
  m_EN_name: {
    type: String,
    required: true
  },
  m_code: {
    type: String,
    required: true
  },

  m_fontawesome_class: {
    type: String,
  }, 
    
  m_description: {
    type: String,
    required: true
  },
  m_image: {
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

module.exports = Market = mongoose.model('market', marketSchema);