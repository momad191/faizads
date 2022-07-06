const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

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
  paypal_account: {  
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
  verified: {
     type: Boolean, default: false
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
  activations_status : { 
    type: String,
    default: 'no'
   
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



// UserSchema.methods.generateAuthToken = function () {
// 	const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
// 		expiresIn: "7d",
// 	});
// 	return token;
// };

  
// const validate = (data) => {
// 	const schema = Joi.object({
// 		first_name: Joi.string().required().label("First Name"),
// 		last_name: Joi.string().required().label("Last Name"),
// 		username: Joi.string().required().label("user name"),
//     email: Joi.string().email().required().label("Email"),
// 		password: passwordComplexity().required().label("Password"),
//     validity: Joi.string().optional().label("validity"),

//     validity: Joi.string().optional().label("validity"),
//     country_name: Joi.string().optional().label("country_name"),
//     country_code: Joi.string().optional().label("country_code"),
//     city: Joi.string().optional().label("city"),
//     state: Joi.string().optional().label("state"),
//     postal: Joi.string().optional().label("postal"),
//     latitude: Joi.optional().label("latitude"),
//     longitude: Joi.optional().label("longitude"),
//     IPv4: Joi.optional().label("IPv4"),
//     shopname: Joi.optional().label("shopname"),
//     shopstatus: Joi.optional().label("shopstatus"),
//     ref:Joi.optional().label("ref"),
//     membership_class: Joi.optional().label("membership_class"),
//     available_ads:Joi.optional().label("available_ads"),
//     membership_renewal_date: Joi.optional().label("membership_renewal_date"),
//     membership_renewal_expiry_date: Joi.optional().label("membership_renewal_expiry_date"),
  
// 	});
// 	return schema.validate(data);
// };
 



module.exports = User = mongoose.model('user', UserSchema);
 