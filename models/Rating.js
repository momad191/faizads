const mongoose = require('mongoose');
 

const Schema = mongoose.Schema;
const RatingSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user' 
      },
      
      // rater_shop: {
      //   type: Schema.Types.ObjectId,
      //   ref: 'shop'
      // },


      rater_user: {
        type: String,
      }, 

      
      the_target_shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },
      the_target_shop_username: {
        type: String,
      }, 
      rating_value: {
        type: String,
      }, 

      


      date: {
        type: Date,
        default: Date.now
      },

});  

module.exports = Rating = mongoose.model('rating', RatingSchema);