const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserSchema = new mongoose.Schema({
  
  first_name: {
    type: String,
    required: true
  },  
  last_name:{
    type: String,
    required: true
  },
  payee_name: { 
    type: String,
  
  }, 
  username: {
    type: String,
    required: true,
    unique:true
  }, 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  
  },
  country_code: { 
    type: String,
    default: ''
  },
  country_name: { 
    type: String,
    default: ''
  },
  city: { 
    type: String,
    default: ''
  },
  state: { 
    type: String,
    default: ''
  },
  postal: { 
    type: String,
    default: ''
  }, 
  phone: { 
    type: String,
    default: ''
  },
  address1: { 
    type: String,
    default: ''
  },
  address2: { 
    type: String,
    default: ''
  },
  latitude: { 
    type: String,
    default: ''
  },
  longitude: { 
    type: String,
    default: ''
  },
  IPv4: { 
    type: String,
    default: ''
   
  },
  shopname: { 
    type: String,
     
    
  },
  shopstatus: { 
    type: String,
    
  },
 
  ref: { 
    type: String,
     
   
  },
 
  validity: {
    type: String,
  
  
  }, 

  registration_date: {
    type: Date,
    default: Date.now
  },

  membership_class : { 
    type: String,
   
  },

  Payment_status : { 
    type: String,
    default: 'no'
   
  },
 
 

  available_ads : { 
    type: Number, 
  },
 
  membership_renewal_date: {
    type: Date,
  },

  membership_renewal_expiry_date: {
    type: Date,
  },

  Visual_Code: {
    type: Number,
  },


  user_img: {
    type: String,
  
  },

  user_logo_img: {
    type: String,
  
  },

   
}); 

module.exports = User = mongoose.model('user', UserSchema);