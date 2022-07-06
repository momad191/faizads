const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResetSchema = new mongoose.Schema({
  
  r_email: {  
    type: String,
    required: true
  },
  r_status: { 
    type: String,
    default:'open'
      
  },
 
  r_date: { 
    type: Date,
    default: Date.now
     
  },
   
}); 
 
module.exports = Reset = mongoose.model('reset', ResetSchema);