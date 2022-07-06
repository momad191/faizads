const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RegisterSchema = new mongoose.Schema({

  r_email: {  
    type: String,
    required: true
  }, 
  r_ref: { 
    type: String,
    default:'no'
   
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
 
module.exports = Register = mongoose.model('register', RegisterSchema);