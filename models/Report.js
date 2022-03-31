const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ReportSchema = new mongoose.Schema({
   
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
    r_subject: {
        type: String
      },
      r_message: {
        type: String
      },
      r_username: { 
        type: String
      },
      r_shop: {
        type: Schema.Types.ObjectId,
        ref: 'shop'
      },
      r_user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user'
      },
     
      
      date: {
        type: Date,
        default: Date.now
      }
     
}); 

module.exports = Report = mongoose.model('report', ReportSchema);