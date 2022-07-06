const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const membershipTypeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },     
  m_t_AR_name: {
    type: String,
    required: true
  },  
  m_t_EN_name: {
    type: String,
    required: true
  },  
  m_t_code: {
    type: String,
    required: true
  },
  m_t_description: { 
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Membershiptype = mongoose.model('membershiptype', membershipTypeSchema);
  