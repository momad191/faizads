const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;
const FollowupSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user' 
      },
      
      following_shop: {
        // type: String,
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },

      follower_shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },
      follower_user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
        
      }, 
      following_user: {
        // type: String,
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      date: {
        type: Date,
        default: Date.now
      },

});  

module.exports = Followup = mongoose.model('followup', FollowupSchema);