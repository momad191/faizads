const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const SubmessageSchema = new mongoose.Schema({
        
    msgId: {
        type: Schema.Types.ObjectId,
       
      },
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

module.exports = Submessage = mongoose.model('submessage', SubmessageSchema);