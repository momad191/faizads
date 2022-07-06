const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
    
  const shopSchema = new Schema({
   
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },  
 
    username: {
        type: String,
      },
   
    shop_name: {
      type: String,
  
    },  

    shop_type: {
      type: String,
  
    },  

    shop_description: {
        type: String,
     
      }, 
  
    shop_img: {
      type: String,
    
    },
 
    shop_logo_img: {
      type: String,
    
    },

    shop_status: { 
        type: String,
        
      },

    shop_country_code: { 
      type: String,
      default: ''
    },
    shop_country_name: { 
      type: String,
      default: ''
    },
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    facebook: {
      type: String
    },
    linkedin: {
      type: String
    },
    instagram: {
      type: String
    },

    shop_email: {
      type: String
    },
shop_website: {
      type: String
    },

shop_whatsaap: {
      type: String
    },
 
    shop_mobile: {
      type: String  
    },

 shop_phone1: {
      type: String
    },
 shop_phone2: {
      type: String
    },
 shop_phone3: {
      type: String
    },
 
 
    clicks: [
      {
        shop: {
          type: Schema.Types.ObjectId,
          ref: 'shop',
         
        }
      }
    ],

  
    followers: [
      {
        user: {
          type: Schema.Types.ObjectId,
          ref: 'user',
        },

        target_shop_to_follow: {
          type: String
        },

        
        shop_username: {
          type: String
        },

        shop: {
          type: Schema.Types.ObjectId,
          ref: 'shop',
        },

      }
    ],
    

    date: {
      type: Date,
      default: Date.now
    }
  
  
  }); 
module.exports = Shop = mongoose.model('shop', shopSchema);
