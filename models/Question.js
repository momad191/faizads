const mongoose = require('mongoose');
const Schema = mongoose.Schema;
   
const questionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    
  q_title: {
    type: String,
    required: true
  },
  q_category_id: {
    // type: String,
     type: Schema.Types.ObjectId,
     ref: 'categories',
     
   },
  q_category: {
    type: String
  },
    
  q_description: {
    type: String,
    required: true
  },
  q_image: {
    type: String,
   
  },
 
  name: {
    type: String
  },
  avatar: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});
 
module.exports = Question = mongoose.model('question', questionSchema);