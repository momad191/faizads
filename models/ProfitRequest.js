const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProfitRequestSchema = new mongoose.Schema({
    amount: { 
        type: Number,
        required: true
      }, 
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      date: {
        type: Date,
        default: Date.now
      },
      status: {
        type: String,
        default:'check-in'
      }
}); 

module.exports = ProfitRequest = mongoose.model('profitRequest', ProfitRequestSchema);