const mongoose = require('mongoose');

const VisualCodeSchema = new mongoose.Schema({
 
        

  visual_code: {
    type: Number,
  },

  v_date: {
    type: Date,
    default: Date.now
  },

   
}); 

module.exports = Visualcode = mongoose.model('visualcode', VisualCodeSchema);