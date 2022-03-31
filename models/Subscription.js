const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
   
  const subscriptionSchema = new Schema({
   
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },  
   
    first_name: {
      type: String,
      required: true
    },  
    last_name:{
      type: String,
      required: true
    },

    username: {
      type: String,
    },

    email: {
      type: String,
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
  
 
  
  
  }); 
module.exports = Subscription = mongoose.model('subscription', subscriptionSchema);
