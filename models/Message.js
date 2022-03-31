const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const MessageSchema = new mongoose.Schema({
      
      from_user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      to_user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
      toUser: {
        type: String
      },
      subject: {
        type: String
      },
      text: {
        type: String
      },

      date: {
        type: Date,
        default: Date.now
      },

  

  
     
});  

module.exports = Message = mongoose.model('message', MessageSchema);