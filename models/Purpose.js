const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const purposeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },    
  p_AR_name: {
    type: String,
    required: true
  },  
  p_EN_name: {
    type: String,
    required: true
  },
  p_code: {
    type: String,
    required: true
  },
  p_description: { 
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Purpose = mongoose.model('purpose', purposeSchema);
  