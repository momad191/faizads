const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;
const FollowupSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user' 
      },
      
      following_shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },

      follower_shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },
      follower_user: {
        type: String,
        
      }, 
      following_user: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      },

});  

module.exports = Followup = mongoose.model('followup', FollowupSchema);