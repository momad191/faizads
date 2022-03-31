const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },    
  shop: {
    type: Schema.Types.ObjectId,
    ref: 'shop'
  },  
  market: { 
    type: Schema.Types.ObjectId,
    ref: 'market'
  }, 
  category: {
    type: Schema.Types.ObjectId,
    ref: 'category'
  }, 
  city: {
    type: Schema.Types.ObjectId,
    ref: 'city'
  },  
  country: {
    type: Schema.Types.ObjectId,
    ref: 'country'
  },  
              
  username: { 
    type: String
  },
  title: {
    type: String
  },
  title_English: {
    type: String
  },
     
  activation: {
    type: String,
   
  }, 

  premium: {
    type: String,
   
  }, 

  purpose: {
    type: String
  }, 
 
  price: {
    type: Number
  }, 
 
  currency: {
    type: String
  }, 

  category_code : {
    type: String
  },   
  category_name : {
    type: String
  }, 

  market_code : {
    type: String
  }, 

  market_name : {
    type: String
  }, 
 
  country_code : {
    type: String
  },
  city_code : {
    type: String
  },

  mobile: {
    type: String
  },

  whatsapp: {
    type: String
  },

 telephone: {
    type: String
  },

 email:{
    type: String
  },

 websitelink:{
    type: String
  },

  Main_paragraph : {
    type: String
  },

  Main_English_paragraph : {
    type: String
  },
 
  
  
  // SubName : {
  //   type: String
  // }, 
  // Subid : {
  //   type: Schema.Types.ObjectId,
  //   ref: 'subcategories'
  // }, 
 
  video : {
    type: String
  }, 
 
  Keywords : {
    type: String
  }, 
  short : { 
    type: String
  }, 
  
  image : {
    type: String
  }, 
  

 
  

  pic1 : {
    type: String
  }, 
  pic2 : {
    type: String
  }, 
  pic3 : {
    type: String
  }, 
  pic4 : {
    type: String
  }, 
  pic5 : {
    type: String
  }, 
  pic6 : {
    type: String
  }, 
  pic7 : {
    type: String
  }, 
  pic8 : {
    type: String
  }, 
  pic9 : {
    type: String
  }, 
  pic10 : {
    type: String
  }, 




  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: String,
       
      }
    }
  ],
  
  clicks: [
    {
      post: {
        type: Schema.Types.ObjectId,
        ref: 'post',
       
      }
    }
  ],
   
  five_stars: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      rate: {
        type: String
      }
    }
  ],
  four_stars: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      rate: {
        type: String
      },
    }
  ],  
  three_stars: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      rate: {
        type: String
      },
    }
  ],
  two_stars: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      rate: {
        type: String
      }
    }
  ],
  
  one_stars: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      rate: {
        type: String
      }
    }
  ],
    
  comments: [ 
    {  
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      text: {
        type: String,
        required: true
      },
      first_name: {
        type: String
      },
      last_name: {
        type: String
      },
      username: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  duration : {
    type: Number
  },

  expired : {
    type: Date,
  },
  
});

module.exports = Post = mongoose.model('post', PostSchema);
